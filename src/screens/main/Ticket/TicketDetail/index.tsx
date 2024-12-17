/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {WButton, WText} from '@/components/UIKit';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import {TopNavigation} from '@/components/containers';

function TicketDetail() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TopNavigation title={translate('source:ticket_detail')} />
        </View>
        <WText
          text="Vé vào cổng Thủy Cung Vinpearl Phú Quốc"
          typo="Heading1"
          color="Black"
          numberOfLines={2}
        />
        <View style={styles.contentContainer}>
          <View style={[styles.priceCondition, {marginBottom: 16}]}>
            <WText
              text={translate('source:tour_period')}
              typo="Body1"
              color="Main"
            />
            <WText text="8 giờ" typo="Body2" color="Black" numberOfLines={2} />
          </View>

          <WText
            text={translate('source:ticket_price')}
            typo="Body1"
            color="Main"
          />
          <View style={styles.rowContainer}>
            <WText
              text={translate('source:adult')}
              typo="Body2"
              color="Black"
            />
            <WText text="129.000VNĐ" typo="Body2" color="Error" />
          </View>
          <View style={styles.rowContainer}>
            <WText
              text={translate('source:child')}
              typo="Body2"
              color="Black"
            />
            <WText text="59.000VNĐ" typo="Body2" color="Error" />
          </View>

          <View style={styles.divider} />

          <View style={styles.priceContainer}>
            <View style={styles.priceCondition}>
              <WText
                text={translate('source:ticket_include')}
                typo="Body1"
                color="Main"
              />
              <WText
                text="Vé vào cửa Thủy cung Vinpearl Phú Quốc cho 1 khách."
                typo="Body2"
                color="Black"
                numberOfLines={2}
              />
            </View>

            <View style={styles.priceCondition}>
              <WText
                text={translate('source:ticket_not_include')}
                typo="Body1"
                color="Main"
              />
              <WText
                text="Chi phí cá nhân và vé vào cửa những khu vực khác của Vinpearl Phú Quốc."
                typo="Body2"
                color="Black"
                numberOfLines={2}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.priceContainer}>
            <View style={styles.priceCondition}>
              <WText
                text={translate('source:ticket_expire')}
                typo="Body1"
                color="Main"
              />

              <WText
                text="Vé có hiệu lực sử dụng 1 lần duy nhất với mỗi khách."
                typo="Body2"
                color="Black"
                numberOfLines={2}
              />
            </View>

            <WText
              text={
                translate('source:day_use') +
                ': ' +
                'Sử dụng vào ngày đã chọn mua.'
              }
              typo="Body2"
              color="Black"
              numberOfLines={2}
            />

            <View style={styles.priceCondition}>
              <WText
                text={translate('source:payment_method')}
                typo="Body1"
                color="Main"
              />
              <WText
                text="Áp dụng cho mọi hình thức thanh toán. "
                typo="Body2"
                color="Black"
                numberOfLines={2}
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.priceContainer}>
            <WText text={translate('source:term')} typo="Body1" color="Main" />

            <WText
              text="Vé áp dụng cho khách hàng đã mua vé trước ngày tham quan."
              typo="Body2"
              color="Black"
              numberOfLines={2}
            />

            <WText
              text="Trẻ em dưới 100cm vào cửa miễn phí. "
              typo="Body2"
              color="Black"
              numberOfLines={2}
            />

            <WText
              text="Trẻ em trên 139cm phải mua vé người lớn."
              typo="Body2"
              color="Black"
              numberOfLines={2}
            />

            <WText
              text="Trẻ em phải luôn đi cùng người lớn."
              typo="Body2"
              color="Black"
              numberOfLines={2}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <WButton
          text={translate('source:buy_ticket_now')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: BaseColor.White,
    height: Devices.height,
    paddingTop: 77,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 24,
  },
  contentContainer: {
    marginTop: 24,
  },
  rowContainer: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginVertical: 16,
  },
  priceContainer: {
    display: 'flex',
    gap: 16,
  },
  priceCondition: {
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
    backgroundColor: BaseColor.White,
    borderTopWidth: 1,
    borderTopColor: BaseColor.LightLightGray,
  },
});

export default memo(TicketDetail);
