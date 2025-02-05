import React, {memo, useCallback, useState} from 'react';
import {View} from 'react-native';
import {WButton, WText} from '@/components/UIKit';
import WInputField from '@/components/UIKit/Input/WInputField';
import translate from '@/translations/i18n';
import {PrimaryColor} from '@/constants';
import {Google, Facebook} from 'iconsax-react-native';
import {styles} from './styles';
import {useSignInWithPassword} from '@/hooks/auth/useAuth';
import Toast from 'react-native-toast-message';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

function SignIn() {
  const nav = useWanderlustNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signInWithPassword, loading} = useSignInWithPassword();

  const handleSignIn = useCallback(async () => {
    const response = await signInWithPassword(email, password);

    if (!response.error) {
      nav.navigate(Routes.appScreen);
      Toast.show({
        type: 'success',
        text1: translate('source:log_in_status:success'),
      });
    } else {
      Toast.show({
        type: 'error',
        text1: translate('source:log_in_status:error'),
      });
    }
  }, [nav, email, password, signInWithPassword]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.title}>
          <WText
            text={translate('navigation:sign_in')}
            typo="BoldTitle"
            color="Main"
          />
          <WText
            text={translate('source:welcome_to_wanderlust')}
            typo="Heading2"
            color="Main"
          />
        </View>
        <View style={styles.form}>
          <WInputField
            type="Text"
            text={translate('source:email_or_phone')}
            placeholder={translate('source:enter_email_or_phone')}
            value={email}
            onChangeText={setEmail}
          />
          <WInputField
            type="Password"
            text={translate('source:password')}
            placeholder={translate('source:enter_password')}
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.rightContent}>
            <WText
              text={translate('navigation:forgot_password')}
              typo="Helper"
              color="Main"
            />
          </View>
        </View>
        <View style={styles.button}>
          <WButton
            text={translate('navigation:sign_in')}
            typo="Button1"
            backgroundColor="Main"
            color="White"
            onPress={handleSignIn}
            disable={loading}
          />
        </View>
        <View style={styles.orContainer}>
          <View style={styles.divider} />
          <WText text={translate('source:or')} typo="Body3" color="Gray" />
          <View style={styles.divider} />
        </View>
        <View style={styles.socialSignIn}>
          <View style={styles.socialIcon}>
            <Google size={24} color={PrimaryColor.Main} variant="Bold" />
          </View>
          <View style={styles.socialIcon}>
            <Facebook size={24} color={PrimaryColor.Main} variant="Bold" />
          </View>
        </View>
        <View style={styles.signUpContainer}>
          <WText
            text={translate('source:no_account')}
            typo="Body3"
            color="Gray"
          />
          <WText
            text={translate('source:sign_up_now')}
            typo="Helper"
            color="Main"
          />
        </View>
      </View>
    </View>
  );
}

export default memo(SignIn);
