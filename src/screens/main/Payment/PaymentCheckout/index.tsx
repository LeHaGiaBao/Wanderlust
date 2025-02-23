import React, {memo} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import CheckoutRoom from './Checkout.Room';
import {useWanderlustNavigationParams} from '@/hooks/core/core';
import CheckoutFlight from './Checkout.Flight';

function PaymentCheckout() {
  const params =
    (useWanderlustNavigationParams() as {isFlightBooking?: boolean}) || {};
  const isFlightBooking = params.isFlightBooking ?? false;

  return (
    <>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TopNavigation title={translate('source:payment_checkout')} />
        {isFlightBooking ? <CheckoutFlight /> : <CheckoutRoom />}
      </ScrollView>
    </>
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
});

export default memo(PaymentCheckout);
