/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {WVoucher} from '@/components/UIKit';

const LIST_DATA = [
  {
    id: 1,
    name: 'Giảm 200.000VND',
    description: 'Cho hoá đơn từ 1.000.000VNĐ',
    condition: 'Áp dụng cho khách hàng mới',
    isExpired: false,
  },
  {
    id: 2,
    name: 'Giảm 250.000VND',
    description: 'Cho hoá đơn từ 3.000.000VNĐ',
    condition: 'Hoá đơn đủ điều kiện áp dụng',
    isExpired: false,
  },
  {
    id: 3,
    name: 'Giảm 600.000VND',
    description: 'Cho hoá đơn từ 10.000.000VNĐ',
    condition: 'Rất tiếc, mã này không đủ điều kiện áp dụng',
    isExpired: true,
  },
];

const VOUCHER_DATA = [...LIST_DATA].map((item, index) => ({
  ...item,
  id: index + 1,
}));

function MyVoucher() {
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const renderItem = useCallback(({item}: any) => {
    const {name, description, condition, isExpired} = item;

    return (
      <WVoucher
        name={name}
        description={description}
        condition={condition}
        isExpired={isExpired}
      />
    );
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 12}} />;
  }, []);

  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  return (
    <FlatList
      data={VOUCHER_DATA}
      renderItem={renderItem}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={
        <View style={styles.header}>
          <TopNavigation title={translate('source:my_voucher')} />
        </View>
      }
      ListFooterComponent={renderFooter}
    />
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
  header: {
    marginBottom: 24,
  },
  footer: {
    height: 100,
  },
});

export default memo(MyVoucher);
