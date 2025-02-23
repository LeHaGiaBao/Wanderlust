import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseColor, PrimaryColor} from '@/constants';
import {WIcon, WText} from '@/components/UIKit';
import translate from '@/translations/i18n';
import {ShoppingBag} from 'iconsax-react-native';

function FlightPolicy() {
  return (
    <View style={styles.flightPolicy}>
      <View style={styles.contentFlightContainer}>
        <View style={styles.contentFlight}>
          <WIcon icon="seat" size={20} />
          <WText
            text={translate('source:flight_ticket_type')}
            typo="Body2"
            color="DarkGray"
          />
        </View>
        <WText text="Phổ thông tiết kiệm" typo="Body2" color="Main" />
      </View>

      <View style={styles.contentFlightContainer}>
        <View style={styles.contentFlight}>
          <ShoppingBag size={20} color={PrimaryColor.Main} />
          <WText
            text={translate('source:hand_luggage')}
            typo="Body2"
            color="DarkGray"
          />
        </View>
        <WText text="12kg" typo="Body2" color="Main" />
      </View>

      <View style={styles.contentFlightContainer}>
        <View style={styles.contentFlight}>
          <WIcon icon="luggage" size={20} color={PrimaryColor.Main} />
          <WText
            text={translate('source:checked_baggage')}
            typo="Body2"
            color="DarkGray"
          />
        </View>
        <WText text="23kg" typo="Body2" color="Main" />
      </View>

      <View style={styles.contentFlightContainer}>
        <View style={styles.contentFlight}>
          <WIcon icon="knife" size={20} color={PrimaryColor.Main} />
          <WText
            text={translate('source:meal')}
            typo="Body2"
            color="DarkGray"
          />
        </View>
        <WText text="Thu phí" typo="Body2" color="Main" />
      </View>

      <View style={styles.contentFlightContainer}>
        <View style={styles.contentFlight}>
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
  );
}

const styles = StyleSheet.create({
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
  contentFlightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentFlight: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

export default memo(FlightPolicy);
