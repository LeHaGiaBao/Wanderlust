import React, {memo, useCallback, useRef} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BookingEdit} from '@/components/containers';
import {WButton, WText} from '@/components/UIKit';
import WInputField from '@/components/UIKit/Input/WInputField';
import {BaseColor, Devices, PrimaryColor, SecondaryColor} from '@/constants';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';
import translate from '@/translations/i18n';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {Call, Star1, Verify} from 'iconsax-react-native';

const IMAGE =
  'https://vinpearlresortvietnam.com/wp-content/uploads/villa-3-phong-ngu-vinpearl-discovery-coastalland-phu-quoc-6.jpg';
const VISA =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1000px-Visa_Inc._logo.svg.png';

function CheckoutRoom() {
  const nav = useWanderlustNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const paymentBottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handlePresentPaymentModalPress = useCallback(() => {
    paymentBottomSheetModalRef.current?.present();
  }, []);

  const handleEdit = useCallback(() => {
    handlePresentModalPress();
  }, [handlePresentModalPress]);

  const handleCheckout = useCallback(() => {
    handlePresentPaymentModalPress();
  }, [handlePresentPaymentModalPress]);

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

  const handleChangePaymentMethod = useCallback(() => {
    nav.navigate(Routes.payment_card_list);
  }, [nav]);

  const goBackHome = useCallback(() => {
    nav.reset({index: 0, routes: [{name: Routes.appScreen}]});
    paymentBottomSheetModalRef.current?.dismiss();
  }, [nav]);

  const goToPaymentDetail = useCallback(() => {
    nav.reset({index: 0, routes: [{name: Routes.payment_detail}]});
    paymentBottomSheetModalRef.current?.dismiss();
  }, [nav]);

  return (
    <>
      <View style={styles.contentContainer}>
        <WText
          text={translate('source:booking_info')}
          typo="Heading2"
          color="Black"
        />
        <View style={styles.roomInfo}>
          <Image source={{uri: IMAGE}} style={styles.image} />
          <View style={styles.roomContent}>
            <WText
              text="Khu nghỉ dưỡng Vinpearl Wonderwold Phú Quốc"
              typo="Body2"
              color="Black"
              numberOfLines={2}
            />
            <WText
              text="Biệt thự Rose, 1 phòng ngủ lớn"
              typo="Body3"
              color="DarkGray"
              numberOfLines={2}
            />
            <View style={styles.star}>
              <Star1 size={12} variant="Bold" color={SecondaryColor.Yellow} />
              <WText text="4.8" typo="Label" color="Black" numberOfLines={1} />
            </View>
          </View>
        </View>

        <View style={styles.inforDetail}>
          <BookingEdit />
        </View>

        <View style={styles.customerInfor}>
          <WText
            text={translate('source:customer_information')}
            typo="Heading2"
            color="Black"
          />
          <TouchableOpacity onPress={handleEdit}>
            <WText
              text={translate('source:change')}
              typo="Body3"
              color="Main"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.listItem}>
          <View style={styles.itemContainer}>
            <WText text="Mỹ Duyên - 0343123456" typo="Body2" color="DarkGray" />
          </View>

          <View style={styles.itemContainer}>
            <WText
              text="Thanh Mai - 0349876543"
              typo="Body2"
              color="DarkGray"
            />
          </View>
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
          <View style={styles.itemContainer}>
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
        <View style={styles.divider} />
        <View style={styles.flexButton}>
          <WText
            text={translate('source:total_payment') + ':'}
            typo="Heading1"
            color="Black"
          />
          <WText text="1.234.000 VND" typo="Heading1" color="Error" />
        </View>

        <WButton
          text={translate('source:checkout')}
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
              text={translate('source:customer_information')}
              typo="Heading1"
              color="Black"
            />
          </View>

          <View style={styles.bottomSheetCustomerInfor}>
            <WText
              text={translate('source:customer_information')}
              typo="Heading2"
              color="Black"
            />
            <WInputField
              type="Text"
              text={translate('source:profile_info:full_name')}
              placeholder={translate('source:customer_go_with_name')}
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

          <View style={styles.bottomSheetCustomerInfor}>
            <WText
              text={translate('source:customer_go_with_info')}
              typo="Heading2"
              color="Black"
            />
            <WInputField
              type="Text"
              text={translate('source:profile_info:full_name')}
              placeholder={translate('source:customer_go_with_name')}
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
              text={translate('source:see_payment_detail')}
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
  customerInfor: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  listItem: {
    display: 'flex',
    gap: 8,
    marginVertical: 16,
  },
  itemContainer: {
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
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
  bottomSheetContainer: {
    display: 'flex',
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  bottomsheetHeader: {
    display: 'flex',
    alignItems: 'center',
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
});

export default memo(CheckoutRoom);
