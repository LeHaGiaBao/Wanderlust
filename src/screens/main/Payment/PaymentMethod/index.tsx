import React, {memo, useCallback} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {WButton, WIcon, WText} from '@/components/UIKit';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import translate from '@/translations/i18n';
import {
  AddCircle,
  TicketDiscount,
  ArrowCircleRight,
} from 'iconsax-react-native';
import PaymentItem from './components/PaymentItem';
import {
  useWanderlustNavigation,
  useWanderlustNavigationParams,
} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

const MOMO =
  'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-MoMo-Square.png';
const ZALOPAY =
  'https://static.wikia.nocookie.net/logos/images/2/2f/ZaloPay_logo_2024.png/revision/latest/scale-to-width-down/340?cb=20241018021524&path-prefix=vi';
const VNPAY =
  'https://cdn.haitrieu.com/wp-content/uploads/2022/10/Icon-VNPAY-QR.png';

function PaymentMethod() {
  const nav = useWanderlustNavigation();
  const params =
    (useWanderlustNavigationParams() as {isFlightBooking?: boolean}) || {};
  const isFlightBooking = params.isFlightBooking ?? false;

  const handleCard = useCallback(() => {
    nav.navigate(Routes.payment_edit);
  }, [nav]);

  const goToCardList = useCallback(() => {
    nav.navigate(Routes.payment_card_list);
  }, [nav]);

  const goToAddVoucher = useCallback(() => {
    nav.navigate(Routes.add_new_voucher);
  }, [nav]);

  const goToPaymentCheckout = useCallback(() => {
    nav.navigate(Routes.payment_checkout, {isFlightBooking: isFlightBooking});
  }, [nav, isFlightBooking]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TopNavigation title={translate('source:payment_method')} />
      <View style={styles.contentContainer}>
        <View style={styles.flexContainer}>
          <WText
            text={translate('source:credit_or_debit')}
            typo="Heading2"
            color="Black"
          />
          <TouchableOpacity onPress={goToCardList}>
            <WText text={translate('source:edit')} typo="Body3" color="Main" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addNewCard} onPress={handleCard}>
          <AddCircle size={24} variant="Linear" color={BaseColor.Black} />
          <WText
            text={translate('source:add_new_card')}
            typo="Body2"
            color="Black"
          />
        </TouchableOpacity>

        <WText
          text={translate('source:other_method')}
          typo="Heading2"
          color="Black"
        />
        <View style={styles.listItem}>
          <PaymentItem
            image={MOMO}
            title="MoMo"
            icon={
              <WIcon icon="radio-enable" size={24} color={PrimaryColor.Main} />
            }
          />
          <PaymentItem
            image={ZALOPAY}
            title="Zalopay"
            icon={
              <WIcon icon="radio-disable" size={24} color={PrimaryColor.Main} />
            }
          />
          <PaymentItem
            image={VNPAY}
            title="VNPAY"
            icon={
              <WIcon icon="radio-disable" size={24} color={PrimaryColor.Main} />
            }
          />
        </View>

        <WText
          text={translate('source:voucher')}
          typo="Heading2"
          color="Black"
        />
        <TouchableOpacity
          style={styles.voucherContainer}
          onPress={goToAddVoucher}>
          <View style={styles.leftContainer}>
            <TicketDiscount
              size={24}
              variant="Linear"
              color={PrimaryColor.Main}
            />
            <WText
              text={translate('source:choose_voucher')}
              typo="Body2"
              color="DarkGray"
            />
          </View>
          <ArrowCircleRight
            size={24}
            variant="Linear"
            color={BaseColor.DarkGray}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.divider} />

        <View style={styles.flexButton}>
          <WText
            text={translate('source:total') + ':'}
            typo="Heading1"
            color="Black"
          />
          <WText text="1.234.000 VND" typo="Heading1" color="Error" />
        </View>

        <WButton
          text={translate('source:continue')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
          onPress={goToPaymentCheckout}
        />
      </View>
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
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    marginTop: 16,
    height: Devices.height - 150,
  },
  roomInfo: {
    width: '100%',
    marginTop: 8,
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    borderRadius: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowColor: '#C9C9C9',
    elevation: 20,
  },
  image: {
    width: 125,
    height: 70,
    borderRadius: 8,
  },
  roomContent: {
    flex: 1,
    justifyContent: 'center',
    gap: 4,
  },
  star: {
    flexDirection: 'row',
    gap: 4,
  },
  inforDetail: {
    marginVertical: 16,
    borderRadius: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowColor: '#C9C9C9',
    elevation: 20,
  },
  addNewCard: {
    marginVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  listItem: {
    marginVertical: 16,
    display: 'flex',
    gap: 8,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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
  voucherContainer: {
    marginVertical: 16,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowColor: BaseColor.Gray,
    elevation: 5,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default memo(PaymentMethod);
