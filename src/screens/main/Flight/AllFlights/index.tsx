import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import {WFlightTicket} from '@/components/UIKit';

const FLIGHT_DATA = [
  {
    id: 1,
    airlineLogo:
      'https://e-magazine.asiamedia.vn/wp-content/uploads/2024/01/tct-hang-khong-viet-nam-600.png',
    airlineName: 'Vietnam Airlines',
    departureTime: '10.30',
    departureCity: 'SGN',
    arrivalTime: '11:30',
    arrivalCity: 'PQC',
    flightTime: '01h00',
    flightType: 'Bay thẳng',
    ticketType: 'Economy Class',
    numOfPassengers: '1',
    ticketPrice: '1.029.000VNĐ',
  },
  {
    id: 2,
    airlineLogo:
      'https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg',
    airlineName: 'Vietjet Air',
    departureTime: '10.30',
    departureCity: 'SGN',
    arrivalTime: '11:30',
    arrivalCity: 'PQC',
    flightTime: '01h00',
    flightType: 'Bay thẳng',
    ticketType: 'Economy Class',
    numOfPassengers: '1',
    ticketPrice: '1.029.000VNĐ',
  },
  {
    id: 3,
    airlineLogo:
      'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Bamboo-Airways-V.png',
    airlineName: 'Bamboo Airways',
    departureTime: '10.30',
    departureCity: 'SGN',
    arrivalTime: '11:30',
    arrivalCity: 'PQC',
    flightTime: '01h00',
    flightType: 'Bay thẳng',
    ticketType: 'Economy Class',
    numOfPassengers: '1',
    ticketPrice: '1.029.000VNĐ',
  },
  {
    id: 4,
    airlineLogo:
      'https://phongvevietmy.com/wp-content/uploads/2020/07/logo-Pacific-Airlines.jpg',
    airlineName: 'Pacific Airlines',
    departureTime: '10.30',
    departureCity: 'SGN',
    arrivalTime: '11:30',
    arrivalCity: 'PQC',
    flightTime: '01h00',
    flightType: 'Bay thẳng',
    ticketType: 'Economy Class',
    numOfPassengers: '1',
    ticketPrice: '1.029.000VNĐ',
  },
];

const DATA = [
  ...FLIGHT_DATA,
  ...FLIGHT_DATA,
  ...FLIGHT_DATA,
  ...FLIGHT_DATA,
  ...FLIGHT_DATA,
].map((item, index) => ({
  ...item,
  id: index + 1,
}));

function AllFlights() {
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const renderItem = useCallback(({item}: any) => {
    const {
      airlineLogo,
      airlineName,
      departureTime,
      departureCity,
      arrivalTime,
      arrivalCity,
      flightTime,
      flightType,
      ticketType,
      ticketPrice,
      numOfPassengers,
    } = item;

    return (
      <WFlightTicket
        airlineLogo={airlineLogo}
        airlineName={airlineName}
        departureTime={departureTime}
        departureCity={departureCity}
        arrivalTime={arrivalTime}
        arrivalCity={arrivalCity}
        flightTime={flightTime}
        flightType={flightType}
        ticketType={ticketType}
        numOfPassengers={numOfPassengers}
        ticketPrice={ticketPrice}
      />
    );
  }, []);

  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  return (
    <FlatList
      data={DATA}
      numColumns={1}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={renderFooter}
      ListHeaderComponent={
        <>
          <View style={styles.header}>
            <TopNavigation title={translate('source:cheap_flight')} />
          </View>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  container: {
    display: 'flex',
    paddingTop: 77,
    paddingHorizontal: 6,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  footer: {
    width: '100%',
    height: 100,
  },
});

export default memo(AllFlights);
