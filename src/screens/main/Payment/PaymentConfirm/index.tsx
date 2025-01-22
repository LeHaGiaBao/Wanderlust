import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import ConfirmRoom from './components/Confirm.Room';

function PaymentConfirm() {
  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:confirm_information')} />
      <ConfirmRoom />
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
});

export default memo(PaymentConfirm);
