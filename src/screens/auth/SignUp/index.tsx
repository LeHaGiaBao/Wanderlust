import React, {memo, useCallback, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {WButton, WText} from '@/components/UIKit';
import WInputField from '@/components/UIKit/Input/WInputField';
import translate from '@/translations/i18n';
import {styles} from './styles';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

function SignUp() {
  const nav = useWanderlustNavigation();
  const [email, setEmail] = useState('');

  const goToSignIn = useCallback(() => {
    nav.navigate(Routes.sign_in);
  }, [nav]);

  const goToEnterProfile = useCallback(() => {
    if (email) {
      nav.navigate(Routes.enter_profile, {email: email});
    }
  }, [nav, email]);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.title}>
          <WText
            text={translate('navigation:sign_up')}
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
            placeholder={translate('source:enter_email')}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.button}>
          <WButton
            text={translate('source:continue')}
            typo="Button1"
            backgroundColor="Main"
            color="White"
            disable={!email}
            onPress={goToEnterProfile}
          />
        </View>
        <View style={styles.signUpContainer}>
          <WText
            text={translate('source:have_account')}
            typo="Body3"
            color="Gray"
          />
          <TouchableOpacity onPress={goToSignIn}>
            <WText
              text={translate('navigation:sign_in')}
              typo="Helper"
              color="Main"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default memo(SignUp);
