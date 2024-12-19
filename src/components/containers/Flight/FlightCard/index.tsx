import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {WIcon, WText} from '@/components/UIKit';
import {BaseColor, PrimaryColor} from '@/constants';
import {ArrowRight} from 'iconsax-react-native';
import {FlightTicketProps} from '@/@types/styles';

interface FlightCardProps extends Partial<FlightTicketProps> {
  departureCityCode?: string;
  arrivalCityCode?: string;
  time?: string;
  flightCode?: string;
}

function FlightCard(props: FlightCardProps) {
  const {
    airlineLogo,
    airlineName = '',
    departureTime = '',
    departureCity = '',
    arrivalTime = '',
    arrivalCity = '',
    time = '',
    flightTime = '',
    flightType = '',
    ticketType = '',
    departureCityCode = '',
    arrivalCityCode = '',
    flightCode = '',
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <View style={styles.flexContainerData}>
          <WText text={departureCity} typo="Body3" color="Main" />
          <ArrowRight size={16} variant="Linear" color={PrimaryColor.Main} />
          <WText text={arrivalCity} typo="Body3" color="Main" />
        </View>

        <WText text={time} typo="Label" color="DarkGray" />
      </View>

      <View style={styles.flightContainer}>
        <View style={styles.flightTime}>
          <WText text={departureTime} typo="Body2" color="Black" />
          <WText text={departureCityCode} typo="Body3" color="Main" />
        </View>
        <View style={styles.arrowContainer}>
          <WText text={flightTime} typo="Label" color="DarkGray" />
          <WIcon icon="arrow" width={177} size={10} />
          <WText text={flightType} typo="Label" color="DarkGray" />
        </View>
        <View style={styles.flightTime}>
          <WText text={arrivalTime} typo="Body2" color="Black" />
          <WText text={arrivalCityCode} typo="Body3" color="Main" />
        </View>
      </View>

      <View style={styles.flexContainer}>
        <View style={styles.flexContainerData}>
          <Image
            source={{uri: airlineLogo}}
            style={styles.airlineLogo}
            width={20}
            height={20}
          />
          <WText text={`${airlineName} -`} typo="Body3" color="Black" />
          <WText text={flightCode} typo="Body3" color="Main" />
        </View>

        <WText text={ticketType} typo="Label" color="Pressed" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 16,
    backgroundColor: BaseColor.White,
    padding: 16,
    borderRadius: 12,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowColor: '#9D9D9D',
    elevation: 8,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexContainerData: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  flightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  flightName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  airlineLogo: {
    height: 20,
    width: 20,
    borderRadius: 50,
  },
  flightTime: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  arrowContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
});

export default memo(FlightCard);
