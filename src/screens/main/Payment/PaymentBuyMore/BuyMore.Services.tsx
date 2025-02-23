/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {WButton, WIcon, WText} from '@/components/UIKit';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';
import translate from '@/translations/i18n';
import FlightTicketConfirm from './components/FlightTicketConfirm';
import {ArrowCircleRight, ShoppingBag, AddCircle} from 'iconsax-react-native';

function BuyMoreServices() {
  const nav = useWanderlustNavigation();

  const onPressFreeServices = useCallback(() => {
    nav.navigate(Routes.flight_services, {services: 'free'});
  }, [nav]);

  const onPressLuggageServices = useCallback(() => {
    nav.navigate(Routes.flight_services, {services: 'luggage'});
  }, [nav]);

  const onPressMealServices = useCallback(() => {
    nav.navigate(Routes.flight_services, {services: 'meal'});
  }, [nav]);

  const onPressNavigate = useCallback(() => {
    nav.navigate(Routes.payment_method, {isFlightBooking: true});
  }, [nav]);

  return (
    <>
      <View style={styles.contentContainer}>
        <View style={styles.inforDetail}>
          <FlightTicketConfirm />
        </View>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={onPressFreeServices}>
          <WText
            text={translate('source:free_flight_services')}
            typo="Body2"
            color="Black"
          />
          <ArrowCircleRight size={20} color={BaseColor.DarkGray} />
        </TouchableOpacity>

        <View style={styles.anotherServices}>
          <WText
            text={translate('source:another_services')}
            typo="Heading2"
            color="Black"
          />
        </View>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={onPressLuggageServices}>
          <View style={styles.row}>
            <ShoppingBag size={20} color={PrimaryColor.Main} />
            <WText
              text={translate('source:checked_baggage')}
              typo="Body2"
              color="Black"
            />
          </View>

          <AddCircle size={20} variant="Bold" color={PrimaryColor.Main} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={onPressMealServices}>
          <View style={styles.row}>
            <WIcon icon="knife" size={20} color={PrimaryColor.Main} />
            <WText text={translate('source:meal')} typo="Body2" color="Black" />
          </View>
          <AddCircle size={20} variant="Bold" color={PrimaryColor.Main} />
        </TouchableOpacity>

        <View style={styles.anotherServices}>
          <WText
            text={translate('source:ensure_services')}
            typo="Heading2"
            color="Black"
          />
        </View>

        <View style={[styles.row, {marginTop: 16}]}>
          <WIcon icon="radio-disable" size={20} color={PrimaryColor.Main} />
          <View style={styles.safe_services}>
            <WText
              text={translate('source:safe_services')}
              typo="Body2"
              color="Black"
            />
            <WText
              text={translate('source:safe_services_des')}
              typo="Body3"
              color="DarkGray"
              numberOfLines={2}
              styles={{width: '70%'}}
            />
            <WText
              text={translate('source:safe_services_price')}
              typo="Body3"
              color="Main"
            />
          </View>
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
            <WText
              text="Vé chiều đi SGN - PQC x2"
              typo="Body2"
              color="DarkGray"
            />
            <WText
              text="Vé chiều đi PGC - SGN x2"
              typo="Body2"
              color="DarkGray"
            />
          </View>

          <View style={styles.priceRight}>
            <WText text="7,990.000VNĐ" typo="Body2" color="DarkGray" />
            <WText text="7,990.000VNĐ" typo="Body2" color="DarkGray" />
          </View>
        </View>

        <View style={styles.divider} />

        <WText
          text={translate('source:include_vat')}
          typo="Body3"
          color="DarkGray"
        />

        <View style={styles.flexButton}>
          <WText
            text={translate('source:total') + ':'}
            typo="Heading1"
            color="Black"
          />
          <WText text="15.980.000 VND" typo="Heading1" color="Error" />
        </View>

        <WButton
          text={translate('source:continue')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
          onPress={onPressNavigate}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    marginTop: 16,
    height: Devices.height - 150,
  },
  inforDetail: {
    marginTop: 8,
    marginBottom: 16,
  },
  customerInfor: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passengerInfo: {
    display: 'flex',
    marginTop: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 100,
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
    marginTop: 8,
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
  itemContainer: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  anotherServices: {
    marginTop: 16,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  safe_services: {
    display: 'flex',
    gap: 8,
  },
});

export default memo(BuyMoreServices);
