import React, {memo} from 'react';
import {View} from 'react-native';
import {WButton, WText} from '@/components/UIKit';
import WInputField from '@/components/UIKit/Input/WInputField';
import translate from '@/translations/i18n';
import {styles} from './styles';
import TopNavigation from '../components/TopNavigation';

function EnterProfile() {
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
          />
          <WInputField
            type="Text"
            text={translate('source:profile_info:email')}
            placeholder={translate('source:profile_info:email_placeholder')}
          />
          <WInputField
            type="Password"
            text={translate('source:profile_info:password')}
            placeholder={translate('source:profile_info:password')}
          />
          <WInputField
            type="Password"
            text={translate('source:profile_info:confirm_password')}
            placeholder={translate(
              'source:profile_info:confirm_password_placeholder',
            )}
          />
        </View>
        <View style={styles.enterProfileContainer}>
          <WText
            text={translate('source:policy:agree_policy')}
            typo="Body3"
            color="Gray"
          />
        </View>
        <View style={styles.button}>
          <WButton
            text={translate('source:agree_and_continue')}
            typo="Button1"
            backgroundColor="Main"
            color="White"
          />
        </View>
      </View>
    </View>
  );
}

export default memo(EnterProfile);
