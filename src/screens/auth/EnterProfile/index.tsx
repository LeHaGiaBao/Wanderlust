import React, {memo, useCallback, useMemo, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {WButton, WText} from '@/components/UIKit';
import WInputField from '@/components/UIKit/Input/WInputField';
import translate from '@/translations/i18n';
import {styles} from './styles';
import TopNavigation from '../_components/TopNavigation';
import {
  useWanderlustNavigation,
  useWanderlustNavigationParams,
} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';
import {useSignUp} from '@/hooks/auth/useAuth';
import Toast from 'react-native-toast-message';

function EnterProfile() {
  const nav = useWanderlustNavigation();
  const params = (useWanderlustNavigationParams() as {email?: string}) || {};
  const [email, setEmail] = useState(params?.email ?? '');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {signUp, loading} = useSignUp();

  const disableButton = useMemo(() => {
    return (
      loading || !name || !email || !phone || !password || !confirmPassword
    );
  }, [confirmPassword, email, loading, name, password, phone]);

  const handleSignUp = useCallback(async () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: translate('source:authentication_status:confirm_password_error'),
      });
    } else {
      await signUp(email, password, name, phone);
    }
  }, [confirmPassword, email, name, password, phone, signUp]);

  const handleGoToTermAndCondition = useCallback(() => {
    nav.navigate(Routes.term_and_condition);
  }, [nav]);

  return (
    <View style={styles.page}>
      <TopNavigation />
      <View style={styles.container}>
        <View style={styles.title}>
          <WText
            text={translate('navigation:profile')}
            typo="BoldTitle"
            color="Main"
          />
          <WText
            text={translate('source:enter_profile')}
            typo="Heading2"
            color="Main"
          />
        </View>
        <View style={styles.form}>
          <WInputField
            type="Text"
            text={translate('source:profile_info:full_name')}
            placeholder={translate('source:profile_info:full_name_placeholder')}
            value={name}
            onChangeText={setName}
          />
          <WInputField
            type="Text"
            text={translate('source:profile_info:email')}
            placeholder={translate('source:profile_info:email_placeholder')}
            value={email}
            onChangeText={setEmail}
          />
          <WInputField
            type="Text"
            text={translate('source:profile_info:phone')}
            placeholder={translate('source:enter_phone')}
            value={phone}
            onChangeText={setPhone}
          />
          <WInputField
            type="Password"
            text={translate('source:profile_info:password')}
            placeholder={translate('source:profile_info:password')}
            value={password}
            onChangeText={setPassword}
          />
          <WInputField
            type="Password"
            text={translate('source:profile_info:confirm_password')}
            placeholder={translate(
              'source:profile_info:confirm_password_placeholder',
            )}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
        <TouchableOpacity
          style={styles.enterProfileContainer}
          onPress={handleGoToTermAndCondition}>
          <WText
            text={translate('source:policy:agree_policy')}
            typo="Body3"
            color="Gray"
          />
        </TouchableOpacity>
        <View style={styles.button}>
          <WButton
            text={translate('source:agree_and_continue')}
            typo="Button1"
            backgroundColor="Main"
            color="White"
            disable={disableButton}
            onPress={handleSignUp}
          />
        </View>
      </View>
    </View>
  );
}

export default memo(EnterProfile);
