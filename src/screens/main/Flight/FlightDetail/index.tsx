import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import {FlightCard, TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {WButton, WIcon, WText} from '@/components/UIKit';
import {ShoppingBag} from 'iconsax-react-native';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

const LOGO = 'https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg';

function FlightDetail() {
  const nav = useWanderlustNavigation();

  const handleBookingFlight = useCallback(() => {
    nav.navigate(Routes.payment_confirm, {isFlightBooking: true});
  }, [nav]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TopNavigation title={translate('source:flight_detail')} />
        </View>
        <WText
          text={translate('source:flight_detail_info')}
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
        <View style={styles.flightPolicy}>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <WIcon icon="seat" size={20} />
              <WText
                text={translate('source:flight_ticket_type')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
            <WText text="Phổ thông tiết kiệm" typo="Body2" color="Main" />
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <ShoppingBag size={20} color={PrimaryColor.Main} />
              <WText
                text={translate('source:hand_luggage')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
            <WText text="12kg" typo="Body2" color="Main" />
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <WIcon icon="luggage" size={20} color={PrimaryColor.Main} />
              <WText
                text={translate('source:checked_baggage')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
            <WText text="23kg" typo="Body2" color="Main" />
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <WIcon icon="knife" size={20} color={PrimaryColor.Main} />
              <WText
                text={translate('source:meal')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
            <WText text="Thu phí" typo="Body2" color="Main" />
          </View>

          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <WIcon icon="cancel-circle" size={20} color={PrimaryColor.Main} />
              <WText
                text={translate('source:refund_ticket')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
            <WText text="Không" typo="Body2" color="Main" />
          </View>
        </View>
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
          text={translate('source:choose_ticket')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
          onPress={handleBookingFlight}
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
  ticketCard: {
    marginVertical: 16,
  },
  flightPolicy: {
    marginTop: 10,
    display: 'flex',
    gap: 12,
    backgroundColor: BaseColor.White,
    padding: 16,
    borderRadius: 12,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowColor: '#9D9D9D',
    elevation: 8,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
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
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginBottom: 12,
  },
  flexButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
});

export default memo(FlightDetail);
