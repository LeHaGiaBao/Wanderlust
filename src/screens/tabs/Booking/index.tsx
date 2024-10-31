import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

function BookingScreen() {
  return <View style={styles.bookingScreen} />;
}

export default memo(BookingScreen);
