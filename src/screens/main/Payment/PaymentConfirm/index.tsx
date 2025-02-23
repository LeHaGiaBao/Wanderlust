import React, {memo} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import ConfirmRoom from './Confirm.Room';
import {useWanderlustNavigationParams} from '@/hooks/core/core';
import ConfirmPassengerInfo from './Confirm.PassengerInfo';

function PaymentConfirm() {
  const params =
    (useWanderlustNavigationParams() as {isFlightBooking?: boolean}) || {};
  const isFlightBooking = params.isFlightBooking ?? false;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TopNavigation
        title={
          isFlightBooking
            ? translate('source:passenger_info')
            : translate('source:confirm_information')
        }
      />
      {isFlightBooking ? <ConfirmPassengerInfo /> : <ConfirmRoom />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  footer: {
    height: 100,
  },
});

export default memo(PaymentConfirm);
