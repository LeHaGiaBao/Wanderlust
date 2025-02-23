import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {WText} from '@/components/UIKit';
import translate from '@/translations/i18n';
import {BaseColor} from '@/constants';

interface FlightPassengerInforProps {
  passengerNum: number;
}

function FlightPassengerInfor(props: FlightPassengerInforProps) {
  const {passengerNum} = props;

  return (
    <>
      <View style={styles.row}>
        <WText
          text={translate('source:passenger_info_n', {n: passengerNum})}
          typo="Heading2"
          color="Black"
        />
      </View>

      <View style={styles.itemContainer}>
        <WText text="NGUYEN / MY DUYEN" typo="Body2" color="DarkGray" />
      </View>

      <View style={styles.flexItem}>
        <View style={styles.inforItemFlex}>
          <WText text="01/01/2000" typo="Body2" color="DarkGray" />
        </View>
        <View style={styles.inforItemFlex}>
          <WText text="Nữ" typo="Body2" color="DarkGray" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  flexItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  inforItemFlex: {
    marginTop: 8,
    flex: 0.5,
    gap: 4,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowColor: BaseColor.Gray,
    elevation: 5,
  },
  genderItem: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 28,
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
});

export default memo(FlightPassengerInfor);
