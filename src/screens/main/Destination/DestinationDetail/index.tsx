import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import DetailHeader from './components/Detail.Header';
import DetailContent from './components/Detail.Content';

function DestinationDetail() {
  return (
    <View style={styles.container}>
      <DetailHeader />
      <DetailContent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
});

export default memo(DestinationDetail);
