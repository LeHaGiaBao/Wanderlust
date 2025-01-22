/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {BookingEdit, TopNavigation} from '@/components/containers';
import {WText} from '@/components/UIKit';
import {
  BaseColor,
  Devices,
  PrimaryColor,
  SecondaryColor,
  StatusColor,
} from '@/constants';
import translate from '@/translations/i18n';
import {
  Star1,
  Copy,
  Location,
  Map1,
  Call,
  Message,
  MessageQuestion,
  ArrowRotateLeft,
  CloseCircle,
} from 'iconsax-react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const IMAGE =
  'https://vinpearlresortvietnam.com/wp-content/uploads/villa-3-phong-ngu-vinpearl-discovery-coastalland-phu-quoc-6.jpg';

function PaymentDetail() {
  const paymentCode = useRef('123456789');

  const handleCopyPaymentCode = useCallback(() => {
    Clipboard.setString(paymentCode.current);
  }, []);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TopNavigation title={translate('source:payment_detail')} />
      <View style={styles.contentContainer}>
        <WText
          text={translate('source:payment_code')}
          typo="Heading2"
          color="Black"
        />
        <View style={styles.paymentCode}>
          <WText text={paymentCode.current} typo="Heading2" color="Main" />
          <TouchableOpacity
            onPress={handleCopyPaymentCode}
            style={styles.copyIcon}>
            <Copy size={24} color={PrimaryColor.Main} />
          </TouchableOpacity>
        </View>
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

        <View style={styles.location}>
          <View style={styles.itemNode}>
            <Location size={20} color={PrimaryColor.Main} variant="Bold" />
            <WText
              text="Bãi Dài, Gành Dầu, Phú Quốc, VN"
              typo="Body2"
              color="DarkGray"
              numberOfLines={1}
            />
          </View>
          <TouchableOpacity style={styles.mapNode}>
            <Map1 size={24} color={PrimaryColor.Main} />
            <WText text={translate('source:map')} typo="Button2" color="Main" />
          </TouchableOpacity>
        </View>

        <View style={styles.customerInfor}>
          <WText
            text={translate('source:customer_information')}
            typo="Heading2"
            color="Black"
          />
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
            text={translate('source:payment_detail_change_info')}
            typo="Body2"
            color="Black"
          />
          <WText
            text={translate('source:payment_detail_change_info_des')}
            typo="Body2"
            color="DarkGray"
          />
        </View>

        <View style={[styles.customerInfor, {marginTop: 16}]}>
          <WText
            text={translate('source:hotel_contact_title')}
            typo="Heading2"
            color="Black"
          />
        </View>

        <View style={styles.listItem}>
          <View style={styles.itemContainer}>
            <Call size={24} variant="Bold" color={BaseColor.Black} />
            <WText text="0123456789" typo="Body2" color="DarkGray" />
          </View>

          <View style={styles.itemContainer}>
            <Message size={24} variant="Bold" color={BaseColor.Black} />
            <WText
              text="Hậu Lê (Quản lý khách sạn)"
              typo="Body2"
              color="DarkGray"
            />
          </View>

          <View style={styles.divider} />
          <View style={styles.price}>
            <WText
              text={translate('source:total_payment') + ':'}
              typo="Heading2"
              color="Black"
            />

            <WText text="8.438.920 VND" typo="Heading2" color="Error" />
          </View>
          <View style={styles.divider} />

          <WText
            text={translate('source:cancel_payment_policy')}
            typo="Heading2"
            color="Black"
          />

          <View style={styles.itemQuestion}>
            <ArrowRotateLeft size={24} color={BaseColor.Black} />
            <View style={styles.content}>
              <WText
                text={translate('source:no_refund')}
                typo="Body2"
                color="Black"
              />
              <WText
                text={translate('source:no_refund_des')}
                typo="Body3"
                color="DarkGray"
              />
            </View>
          </View>

          <View style={styles.divider} />

          <WText
            text={translate('source:hotel_rule:rule_title')}
            typo="Heading2"
            color="Black"
          />

          <View style={styles.itemQuestion}>
            <View style={styles.content}>
              <WText
                text={translate('source:hotel_rule:rule_des1')}
                typo="Body3"
                color="DarkGray"
              />
              <WText
                text={translate('source:hotel_rule:rule_des2')}
                typo="Body3"
                color="DarkGray"
              />
              <WText
                text={translate('source:hotel_rule:rule_des3')}
                typo="Body3"
                color="DarkGray"
              />
            </View>
          </View>

          <View style={styles.divider} />

          <WText
            text={translate('source:support_center')}
            typo="Heading2"
            color="Black"
          />

          <View style={styles.itemQuestion}>
            <CloseCircle size={24} variant="Bold" color={StatusColor.Error} />
            <View style={styles.content}>
              <WText
                text={translate('source:cancel_room')}
                typo="Body2"
                color="Black"
              />
              <WText
                text={translate('source:cancel_room_des')}
                typo="Body3"
                color="DarkGray"
              />
              <TouchableOpacity>
                <WText
                  text={translate('source:hotel_contact_title')}
                  typo="Body3"
                  color="Main"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.itemQuestion}>
            <MessageQuestion size={24} color={BaseColor.Black} />
            <View style={styles.content}>
              <WText
                text={translate('source:question_support')}
                typo="Body2"
                color="Black"
              />
              <WText
                text={translate('source:question_support_description')}
                typo="Body3"
                color="DarkGray"
              />
              <TouchableOpacity>
                <WText
                  text={translate('source:customer_services_contact')}
                  typo="Body3"
                  color="Main"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
  paymentCode: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderColor: BaseColor.Black,
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 16,
    paddingVertical: 12,
  },
  copyIcon: {
    position: 'absolute',
    right: 8,
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
  location: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginVertical: 16,
    borderRadius: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowColor: '#C9C9C9',
    elevation: 20,
  },
  itemNode: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  mapNode: {
    display: 'flex',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customerInfor: {
    display: 'flex',
    gap: 8,
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
  footer: {
    height: 100,
  },
  itemQuestion: {
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  content: {
    maxWidth: Devices.width - 55,
    display: 'flex',
    gap: 4,
  },
});

export default memo(PaymentDetail);
