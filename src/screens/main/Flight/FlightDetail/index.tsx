import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import {FlightCard, TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {WText} from '@/components/UIKit';

const LOGO = 'https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg';

function FlightDetail() {
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
    marginTop: 16,
  },
});

export default memo(FlightDetail);
