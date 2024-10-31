import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

function AccountScreen() {
  return <View style={styles.accountScreen} />;
}

export default memo(AccountScreen);
