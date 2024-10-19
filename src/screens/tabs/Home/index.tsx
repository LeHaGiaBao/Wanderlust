import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

function HomeScreen() {
  return <View style={styles.homeScreen} />;
}

export default memo(HomeScreen);
