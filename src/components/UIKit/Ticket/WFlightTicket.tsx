import React, {memo, useCallback, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '@/assets/images';
import {Profile2User} from 'iconsax-react-native';
import WText from '../Text/WText';
import {BaseColor} from '@/constants';
import {FlightTicketProps} from '@/@types/styles';
import translate from '@/translations/i18n';

const TICKET = images.Ticket;
const TICKET_SELECT = images.TicketSelect;
const ARROW = images.ArrowRight;

function WTicket(props: FlightTicketProps) {
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
    onPress,
  } = props;
  const [selected, setSelected] = useState(false);

  const handleSelect = useCallback(() => {
    setSelected(!selected);
  }, [selected]);

  const Wrapper = onPress?.() ? TouchableOpacity : View;

  return (
    <Wrapper onPress={handleSelect}>
      <ImageBackground
        source={selected ? TICKET_SELECT : TICKET}
        resizeMode="stretch"
        style={styles.imageBackground}>
        <View style={styles.leftContainer}>
          <View style={styles.leftContent}>
            <View style={styles.flightName}>
              <Image source={{uri: airlineLogo}} style={styles.airlineLogo} />
              <WText text={airlineName} typo="Body3" color="Black" />
            </View>
            <WText text={ticketType} typo="Label" color="Pressed" />
          </View>
          <View style={styles.leftContent}>
            <View style={styles.flightTime}>
              <WText text={departureTime} typo="Body2" color="Black" />
              <WText text={departureCity} typo="Body3" color="Main" />
            </View>
            <View style={styles.arrowContainer}>
              <WText text={flightTime} typo="Label" color="DarkGray" />
              <Image source={ARROW} height={20} width={20} />
              <WText text={flightType} typo="Label" color="DarkGray" />
            </View>
            <View style={styles.flightTime}>
              <WText text={arrivalTime} typo="Body2" color="Black" />
              <WText text={arrivalCity} typo="Body3" color="Main" />
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <WText
            text={translate('source:detail')}
            typo="Label"
            color="Pressed"
          />
          <View style={styles.ticketInfo}>
            <View style={styles.rowContent}>
              <Profile2User size={16} color={BaseColor.DarkGray} />
              <WText
                text={translate('source:n_passenger', {n: numOfPassengers})}
                typo="Label"
                color="DarkGray"
              />
            </View>
            <WText text={ticketPrice} typo="Body2" color="Error" />
          </View>
        </View>
      </ImageBackground>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 100,
  },
  leftContainer: {
    width: '55%',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 16,
    display: 'flex',
    gap: 12,
  },
  leftContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  rightContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 16,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 19,
  },
  ticketInfo: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 4,
  },
  rowContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
});

export default memo(WTicket);
