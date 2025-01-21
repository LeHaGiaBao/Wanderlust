/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {WButton, WText, WVoucher} from '@/components/UIKit';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import WInputField from '@/components/UIKit/Input/WInputField';

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

function AddNewVoucher() {
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
    <View style={styles.container}>
      <TopNavigation title={translate('source:choose_voucher')} />
      <View style={styles.contentContainer}>
        <WText
          text={translate('source:input_code')}
          typo="Heading2"
          color="Black"
        />

        <View style={styles.inputCode}>
          <WInputField
            type="Text"
            placeholder={translate('source:input_code_description')}
          />
        </View>

        <WText
          text={translate('source:list_voucher')}
          typo="Heading2"
          color="Black"
        />

        <FlatList
          data={LIST_DATA}
          renderItem={renderItem}
          style={styles.voucherContainer}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderFooter}
        />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.price}>
          <View style={styles.priceLeft}>
            <WText
              text={translate('source:total') + ':'}
              typo="Heading2"
              color="Black"
            />
            <WText
              text={translate('source:discount')}
              typo="Body2"
              color="DarkGray"
            />
          </View>

          <View style={styles.priceRight}>
            <WText text="8.638.920 VND" typo="Body2" color="DarkGray" />
            <WText text="0 VND" typo="Body2" color="DarkGray" />
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.flexButton}>
          <WText
            text={translate('source:total_payment') + ':'}
            typo="Heading1"
            color="Black"
          />
          <WText text="8.638.920 VND" typo="Heading1" color="Error" />
        </View>

        <WButton
          text={translate('source:continue')}
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
  inputCode: {
    marginTop: 16,
  },
  contentContainer: {
    marginTop: 16,
  },
  voucherContainer: {
    marginTop: 16,
    display: 'flex',
    gap: 8,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginVertical: 12,
  },
  flexButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  footer: {
    height: 100,
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceLeft: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 8,
  },
  priceRight: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 8,
  },
});

export default memo(AddNewVoucher);
