import React, {memo, useCallback, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {WIcon, WText} from '@/components/UIKit';
import {BaseColor, Devices, PrimaryColor, StatusColor} from '@/constants';
import translate from '@/translations/i18n';
import Clipboard from '@react-native-clipboard/clipboard';
import {
  ArrowRotateLeft,
  CloseCircle,
  Copy,
  MessageQuestion,
  ShoppingBag,
} from 'iconsax-react-native';
import {FlightCard} from '@/components/containers';
import FlightPolicy from './components/FlightPolicy';
import FlightPassengerInfor from './components/FlightPassengerInfor';

const LOGO = 'https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg';

function DetailFlight() {
  const paymentCode = useRef('123456789');

  const handleCopyPaymentCode = useCallback(() => {
    Clipboard.setString(paymentCode.current);
  }, []);

  return (
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
        text={translate('source:departure_detail')}
        typo="Heading2"
        color="Black"
      />

      <View style={styles.ticketCard}>
        <FlightCard
          airlineLogo={LOGO}
          airlineName="Vietjet Air"
          departureTime="10:30"
          departureCityCode="SGN"
          arrivalTime="11:30"
          arrivalCityCode="UIH"
          departureCity="TP Hồ Chí Minh"
          arrivalCity="Quy Nhơn"
          time="Thứ 4, 14 tháng 12 2023"
          flightTime="1h00"
          flightType="Bay thẳng"
          flightCode="VN1381"
          ticketType="Economy Class"
        />
      </View>

      <WText
        text={translate('source:flight_ticket_policy')}
        typo="Heading2"
        color="Black"
      />

      <FlightPolicy />

      <View style={styles.customerInfor}>
        <WText
          text={translate('source:another_services')}
          typo="Heading2"
          color="Black"
        />
      </View>

      <View style={styles.listItem}>
        <View style={styles.itemContainer}>
          <ShoppingBag size={20} color={PrimaryColor.Main} />
          <WText
            text={translate('source:checked_baggage')}
            typo="Body2"
            color="DarkGray"
          />
          <View style={styles.right}>
            <WText text="20kg" typo="Body2" color="Main" />
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <WText
        text={translate('source:arrival_detail')}
        typo="Heading2"
        color="Black"
      />

      <View style={styles.ticketCard}>
        <FlightCard
          airlineLogo={LOGO}
          airlineName="Vietjet Air"
          departureTime="10:30"
          departureCityCode="SGN"
          arrivalTime="11:30"
          arrivalCityCode="UIH"
          departureCity="TP Hồ Chí Minh"
          arrivalCity="Quy Nhơn"
          time="Thứ 4, 14 tháng 12 2023"
          flightTime="1h00"
          flightType="Bay thẳng"
          flightCode="VN1381"
          ticketType="Economy Class"
        />
      </View>

      <WText
        text={translate('source:flight_ticket_policy')}
        typo="Heading2"
        color="Black"
      />

      <FlightPolicy />

      <View style={styles.customerInfor}>
        <WText
          text={translate('source:another_services')}
          typo="Heading2"
          color="Black"
        />
      </View>

      <View style={styles.listItem}>
        <View style={styles.itemContainer}>
          <WIcon icon="knife" size={20} color={PrimaryColor.Main} />
          <WText
            text={translate('source:meal')}
            typo="Body2"
            color="DarkGray"
          />
          <View style={styles.right}>
            <WText text="2 suất" typo="Body2" color="Main" />
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.passengerInfo}>
        <FlightPassengerInfor passengerNum={1} />
        <FlightPassengerInfor passengerNum={2} />
      </View>

      <View style={styles.listItem}>
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
          text={translate('source:cancel_ticket_payment_policy')}
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
              text={translate('source:no_refund_flight_des')}
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
              text={translate('source:cancel_ticket')}
              typo="Body2"
              color="Black"
            />
            <WText
              text={translate('source:cancel_ticket_des')}
              typo="Body3"
              color="DarkGray"
            />
            <TouchableOpacity>
              <WText
                text={translate('source:airplane_services_contact')}
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
  );
}

const styles = StyleSheet.create({
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
  ticketCard: {
    marginVertical: 16,
  },
  customerInfor: {
    marginTop: 16,
    display: 'flex',
    gap: 8,
  },
  listItem: {
    display: 'flex',
    gap: 8,
    marginVertical: 16,
  },
  passengerInfo: {
    display: 'flex',
    marginTop: 16,
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
  right: {
    position: 'absolute',
    right: 12,
    paddingVertical: 8,
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

export default memo(DetailFlight);
