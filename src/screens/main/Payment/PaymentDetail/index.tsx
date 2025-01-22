import React, {memo} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import DetailBookRoom from './components/Detail.BookRoom';

function PaymentDetail() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TopNavigation title={translate('source:payment_detail')} />
      <DetailBookRoom />
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
