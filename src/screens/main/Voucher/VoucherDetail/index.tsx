import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {WButton, WText, WVoucher} from '@/components/UIKit';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';

function VoucherDetail() {
  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:voucher_detail')} />
      <View style={styles.contentContainer}>
        <WVoucher
          name="Giảm 250.000VND"
          description="Cho hoá đơn từ 3.000.000VNĐ"
          condition="Áp dụng cho khách hàng mới"
          isExpired={false}
        />

        <View style={styles.listContent}>
          <View style={styles.item}>
            <WText text="Thời hạn sử dụng mã" typo="Body1" color="Main" />
            <WText
              text="Đến 23:59 ngày 25 - 12 - 2023 "
              typo="Body2"
              color="Black"
            />
          </View>

          <View style={styles.item}>
            <WText text="Ưu đãi" typo="Body1" color="Main" />
            <WText
              text="Dành cho khách hàng sử dụng đặt phòng khách sạn lần đầu tiên tại Wanderlust."
              typo="Body2"
              color="Black"
            />
          </View>

          <View style={styles.item}>
            <WText text="Phương thức thanh toán" typo="Body1" color="Main" />
            <WText
              text="Áp dụng cho mọi hình thức thanh toán. "
              typo="Body2"
              color="Black"
            />
          </View>

          <View style={styles.item}>
            <WText text="Điều kiện" typo="Body1" color="Main" />
            <WText
              text="Giảm ngay 200.000 VND cho hóa đơn từ 1.000.000 VND thanh toán đặt phòng khách sạn. "
              typo="Body2"
              color="Black"
            />
            <WText
              text="Áp dụng đến 23:59 ngày 25 - 12 - 2023. "
              typo="Body2"
              color="Black"
            />
            <WText
              text="Mỗi tài khoản chỉ được sử dụng một lần duy nhất."
              typo="Body2"
              color="Black"
            />
            <WText
              text="Mã giảm giá được phát hành bởi Wanderlust và sẽ không được hoàn lại với bất kỳ lí do nào."
              typo="Body2"
              color="Black"
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <WButton
          text={translate('source:use_now')}
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
  contentContainer: {
    marginTop: 40,
  },
  listContent: {
    marginTop: 32,
  },
  item: {
    display: 'flex',
    gap: 8,
    marginBottom: 16,
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
});

export default memo(VoucherDetail);
