/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import {FlightCard, TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {WText} from '@/components/UIKit';
import MyFlightVisited from './components/MyFlightVisited';

const LOGO = 'https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg';

const DATA_UPCOMING = [{id: 1}, {id: 2}];

const DATA = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

function MyFlight() {
  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 8}} />;
  }, []);

  const renderItem = useCallback(() => {
    return <MyFlightVisited />;
  }, []);

  const renderItemFlightUpcoming = useCallback(() => {
    return (
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
    );
  }, []);

  const renderFlightUpcoming = useMemo(() => {
    return (
      <FlatList
        style={styles.upcomingFlight}
        data={DATA_UPCOMING}
        renderItem={renderItemFlightUpcoming}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        ItemSeparatorComponent={renderSeparator}
      />
    );
  }, [renderItemFlightUpcoming, renderSeparator]);

  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderSeparator}
      ListFooterComponent={renderFooter}
      ListHeaderComponent={
        <>
          <TopNavigation title={translate('source:my_flight')} />
          <View style={styles.contentContainer}>
            <WText
              text={translate('source:flight_upcoming')}
              typo="Heading2"
              color="Black"
            />
            {renderFlightUpcoming}
            <WText
              text={translate('source:flight_visited')}
              typo="Heading2"
              color="Black"
            />
          </View>
        </>
      }
    />
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
    marginBottom: 8,
  },
  upcomingFlight: {
    marginTop: 8,
    marginBottom: 16,
  },
  footer: {
    width: '100%',
    height: 120,
  },
});

export default memo(MyFlight);
