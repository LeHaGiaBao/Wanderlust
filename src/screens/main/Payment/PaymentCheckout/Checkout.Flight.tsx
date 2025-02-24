import React, {memo, useCallback, useRef} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {WButton, WText} from '@/components/UIKit';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';
import translate from '@/translations/i18n';
import FlightTicketConfirm from './components/FlightTicketConfirm';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import WInputField from '@/components/UIKit/Input/WInputField';
import {Call, Verify} from 'iconsax-react-native';
import FlightPassengerInfor from './components/FlightPassengerInfor';

const VISA =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1000px-Visa_Inc._logo.svg.png';

function CheckoutFlight() {
  const nav = useWanderlustNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const paymentBottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handlePresentPaymentModalPress = useCallback(() => {
    paymentBottomSheetModalRef.current?.present();
  }, []);

  const goBackHome = useCallback(() => {
    nav.reset({index: 0, routes: [{name: Routes.appScreen}]});
    paymentBottomSheetModalRef.current?.dismiss();
  }, [nav]);

  const goToPaymentDetail = useCallback(() => {
    nav.reset({
      index: 0,
      routes: [{name: Routes.payment_detail, params: {isFlightBooking: true}}],
    });
    paymentBottomSheetModalRef.current?.dismiss();
  }, [nav]);

  const renderBackdrop = useCallback((p: any) => {
    return (
      <BottomSheetBackdrop
        {...p}
        opacity={0.8}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  const renderPaymentBackdrop = useCallback((p: any) => {
    return (
      <BottomSheetBackdrop
        {...p}
        opacity={0.8}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior={'none'}
      />
    );
  }, []);

  const handleCheckout = useCallback(() => {
    handlePresentPaymentModalPress();
  }, [handlePresentPaymentModalPress]);

  const handleChangePaymentMethod = useCallback(() => {
    nav.navigate(Routes.payment_card_list);
  }, [nav]);

  return (
    <>
      <View style={styles.contentContainer}>
        <View style={styles.inforDetail}>
          <FlightTicketConfirm />
        </View>

        <View style={styles.customerInfor}>
          <WText
            text={translate('source:contact_info')}
            typo="Heading2"
            color="Black"
          />
          <TouchableOpacity onPress={handlePresentModalPress}>
            <WText text={translate('source:edit')} typo="Body3" color="Main" />
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          <WText text="Mỹ Duyên - 0343123456" typo="Body2" color="Black" />
          <WText text="abc@gmail.com" typo="Body2" color="Black" />
        </View>

        <View style={styles.passengerInfo}>
          <FlightPassengerInfor passengerNum={1} />
          <FlightPassengerInfor passengerNum={2} />
        </View>

        <View style={styles.customerInfor}>
          <WText
            text={translate('source:payment_method')}
            typo="Heading2"
            color="Black"
          />
          <TouchableOpacity onPress={handleChangePaymentMethod}>
            <WText
              text={translate('source:change')}
              typo="Body3"
              color="Main"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.listItem}>
          <View style={styles.itemPayment}>
            <Image
              source={{uri: VISA}}
              style={styles.circleAvatar}
              resizeMode="contain"
            />
            <WText text="**** **** **** 9090" typo="Body2" color="DarkGray" />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.priceFooter}>
          <WText
            text={translate('source:price_detail')}
            typo="Heading2"
            color="Black"
          />
        </View>

        <View style={styles.price}>
          <View style={styles.priceLeft}>
            <WText
              text="Vé chiều đi SGN - PQC x2"
              typo="Body2"
              color="DarkGray"
            />
            <WText
              text="Vé chiều đi PGC - SGN x2"
              typo="Body2"
              color="DarkGray"
            />
          </View>

          <View style={styles.priceRight}>
            <WText text="7,990.000VNĐ" typo="Body2" color="DarkGray" />
            <WText text="7,990.000VNĐ" typo="Body2" color="DarkGray" />
          </View>
        </View>

        <View style={styles.divider} />

        <WText
          text={translate('source:include_vat')}
          typo="Body3"
          color="DarkGray"
        />

        <View style={styles.flexButton}>
          <WText
            text={translate('source:total') + ':'}
            typo="Heading1"
            color="Black"
          />
          <WText text="15.980.000 VND" typo="Heading1" color="Error" />
        </View>

        <WButton
          text={translate('source:continue')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
          onPress={handleCheckout}
        />
      </View>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleComponent={null}
        backdropComponent={renderBackdrop}>
        <BottomSheetView style={styles.bottomSheetContainer}>
          <View style={styles.bottomsheetHeader}>
            <WText
              text={translate('source:contact_info')}
              typo="Heading1"
              color="Black"
            />
            <WText
              text={translate('source:continue_confirm')}
              typo="Body3"
              color="DarkGray"
            />
          </View>

          <View style={styles.bottomSheetCustomerInfor}>
            <WInputField
              type="Text"
              text={translate('source:profile_info:full_name')}
              placeholder={translate(
                'source:profile_info:full_name_placeholder',
              )}
              isNotification={false}
            />
            <WInputField
              type="Text"
              text={translate('source:profile_info:email')}
              placeholder={translate('source:profile_info:email_placeholder')}
              isNotification={false}
            />
            <WInputField
              type="Text"
              placeholder={translate('source:enter_phone')}
              iconAlign="Left"
              icon={
                <>
                  <Call size={24} color={BaseColor.DarkGray} variant="Bold" />
                </>
              }
              isNotification={false}
            />
          </View>

          <View style={styles.bottomSheetButtonContainer}>
            <WButton
              text={translate('source:confirm')}
              typo="Button1"
              color="White"
              backgroundColor="Main"
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>

      <BottomSheetModal
        ref={paymentBottomSheetModalRef}
        handleComponent={null}
        backdropComponent={renderPaymentBackdrop}>
        <BottomSheetView style={styles.bottomSheetContainer}>
          <View style={styles.bottomsheetHeader}>
            <Verify size={50} variant="Bold" color={PrimaryColor.Main} />
          </View>

          <View style={styles.bottomsheetContent}>
            <WText
              text={translate('source:payment_success')}
              typo="Heading1"
              color="Black"
            />
            <WText
              text={translate('source:payment_success_description')}
              typo="Body2"
              color="DarkGray"
            />
          </View>

          <View style={styles.bottomSheetButtonContainer}>
            <WButton
              text={translate('source:see_ticket_payment_detail')}
              typo="Button1"
              color="White"
              backgroundColor="Main"
              onPress={goToPaymentDetail}
            />
            <TouchableOpacity onPress={goBackHome}>
              <WText
                text={translate('source:back_to_home')}
                typo="Button1"
                color="Main"
              />
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    marginTop: 16,
    height: Devices.height + 150,
  },
  inforDetail: {
    marginTop: 8,
    marginBottom: 16,
  },
  customerInfor: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passengerInfo: {
    display: 'flex',
    marginTop: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 100,
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
    marginTop: 8,
    marginBottom: 40,
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
  priceFooter: {
    marginTop: 16,
    marginBottom: 8,
  },
  itemContainer: {
    marginTop: 8,
    display: 'flex',
    gap: 8,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowColor: BaseColor.Gray,
    elevation: 5,
  },
  itemPayment: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowColor: BaseColor.Gray,
    elevation: 5,
  },
  bottomSheetContainer: {
    display: 'flex',
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  bottomsheetHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    marginTop: 24,
  },
  bottomSheetCustomerInfor: {
    marginTop: 16,
    display: 'flex',
    gap: 8,
  },
  bottomSheetButtonContainer: {
    display: 'flex',
    gap: 16,
    marginVertical: 32,
    alignItems: 'center',
  },
  bottomsheetContent: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
    gap: 16,
  },
  listItem: {
    display: 'flex',
    gap: 8,
    marginVertical: 16,
  },
  circleAvatar: {
    height: 24,
    width: 24,
    borderRadius: 2,
    backgroundColor: BaseColor.White,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(CheckoutFlight);
