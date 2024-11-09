import React, {memo} from 'react';
import {View} from 'react-native';
import {WButton, WText} from '@/components/UIKit';
import WInputField from '@/components/UIKit/Input/WInputField';
import translate from '@/translations/i18n';
import {Call} from 'iconsax-react-native';
import {styles} from './styles';
import {BaseColor} from '@/constants';

function SignUp() {
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
            placeholder={translate('source:enter_phone')}
            iconAlign="Left"
            icon={
              <>
                <Call size={24} color={BaseColor.DarkGray} />
              </>
            }
          />
        </View>
        <View style={styles.button}>
          <WButton
            text={translate('source:continue')}
            typo="Button1"
            backgroundColor="Main"
            color="White"
          />
        </View>
        <View style={styles.signUpContainer}>
          <WText
            text={translate('source:have_account')}
            typo="Body3"
            color="Gray"
          />
          <WText
            text={translate('navigation:sign_in')}
            typo="Helper"
            color="Main"
          />
        </View>
      </View>
    </View>
  );
}

export default memo(SignUp);
