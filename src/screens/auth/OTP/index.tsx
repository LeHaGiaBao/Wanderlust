import React, {memo} from 'react';
import {View} from 'react-native';
import {WButton, WText} from '@/components/UIKit';
import WInputField from '@/components/UIKit/Input/WInputField';
import translate from '@/translations/i18n';
import {styles} from './styles';
import TopNavigation from '../components/TopNavigation';

function OTPScreen() {
  return (
    <View style={styles.page}>
      <TopNavigation />
      <View style={styles.container}>
        <View style={styles.title}>
          <WText
            text={translate('navigation:otp')}
            typo="BoldTitle"
            color="Main"
          />
          <WText
            text={translate('source:enter_otp')}
            typo="Heading2"
            color="Main"
          />
        </View>
        <View style={styles.otpForm}>
          <View style={styles.form}>
            <WInputField type="OTP" />
            <WInputField type="OTP" />
            <WInputField type="OTP" />
            <WInputField type="OTP" />
            <WInputField type="OTP" />
            <WInputField type="OTP" />
          </View>
          <WText text="00:22" typo="Body2" color="Black" />
        </View>
        <View style={styles.button}>
          <WButton
            text={translate('source:confirm')}
            typo="Button1"
            backgroundColor="Main"
            color="White"
          />
        </View>
        <View style={styles.otpContainer}>
          <WText
            text={translate('source:no_get_otp')}
            typo="Body3"
            color="Gray"
          />
          <WText
            text={translate('source:resend_otp')}
            typo="Helper"
            color="Main"
          />
        </View>
      </View>
    </View>
  );
}

export default memo(OTPScreen);
