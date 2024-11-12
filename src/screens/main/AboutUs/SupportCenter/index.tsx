import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';

function SupportCenter() {
  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:support_center')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
});

export default memo(SupportCenter);
