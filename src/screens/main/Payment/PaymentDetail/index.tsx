import React, {memo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import DetailBookRoom from './Detail.BookRoom';
import {useWanderlustNavigationParams} from '@/hooks/core/core';
import DetailFlight from './Detail.Flight';

function PaymentDetail() {
  const params =
    (useWanderlustNavigationParams() as {isFlightBooking?: boolean}) || {};
  const isFlightBooking = params.isFlightBooking ?? false;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TopNavigation
        title={
          isFlightBooking
            ? translate('source:flight_payment_detail')
            : translate('source:payment_detail')
        }
      />
      {isFlightBooking ? <DetailFlight /> : <DetailBookRoom />}
      <View style={styles.footer} />
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

export default memo(PaymentDetail);
