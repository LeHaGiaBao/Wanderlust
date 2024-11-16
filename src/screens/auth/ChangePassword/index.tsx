import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import WInputField from '@/components/UIKit/Input/WInputField';
import {WButton} from '@/components/UIKit';

function ChangePassword() {
  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:change_password')} />
      <View style={styles.listForm}>
        <WInputField
          type="Password"
          text={translate('source:change_password_form:current_password')}
          placeholder={translate(
            'source:change_password_form:current_password',
          )}
          borderRadius={8}
        />
        <WInputField
          type="Password"
          text={translate('source:change_password_form:new_password')}
          placeholder={translate(
            'source:change_password_form:new_password_placeholder',
          )}
          borderRadius={8}
        />
        <WInputField
          type="Password"
          text={translate('source:change_password_form:confirm_new_password')}
          placeholder={translate(
            'source:change_password_form:confirm_new_password_placeholder',
          )}
          borderRadius={8}
        />
      </View>
      <View style={styles.button}>
        <WButton
          text={translate('source:save')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  listForm: {
    marginTop: 24,
  },
  button: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    marginHorizontal: 16,
    marginBottom: 50,
  },
});

export default memo(ChangePassword);
