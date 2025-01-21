import React, {memo, useCallback} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {BookingEdit, TopNavigation} from '@/components/containers';
import {WButton, WText} from '@/components/UIKit';
import {BaseColor, Devices, SecondaryColor} from '@/constants';
import translate from '@/translations/i18n';
import {Call, Star1} from 'iconsax-react-native';
import WInputField from '@/components/UIKit/Input/WInputField';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

const IMAGE =
  'https://vinpearlresortvietnam.com/wp-content/uploads/villa-3-phong-ngu-vinpearl-discovery-coastalland-phu-quoc-6.jpg';

function PaymentConfirm() {
  const nav = useWanderlustNavigation();

  const onPressNavigate = useCallback(() => {
    nav.navigate(Routes.payment_method);
  }, [nav]);

  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:confirm_information')} />
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
            <WText text="1 phòng x5 đêm" typo="Body2" color="DarkGray" />
            <WText text="Thuế và phí (8%)" typo="Body2" color="DarkGray" />
          </View>

          <View style={styles.priceRight}>
            <WText text="7,990.000VNĐ" typo="Body2" color="DarkGray" />
            <WText text="639.920VNĐ" typo="Body2" color="DarkGray" />
          </View>
        </View>

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
          onPress={onPressNavigate}
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
    marginTop: 16,
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
});

export default memo(PaymentConfirm);
