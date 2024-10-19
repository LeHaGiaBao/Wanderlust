import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

function RecommendScreen() {
  return <View style={styles.recommendScreen} />;
}

export default memo(RecommendScreen);
