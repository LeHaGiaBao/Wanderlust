import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import ProfileDetailHeader from './components/ProfileDetailHeader';
import EmptyFeed from './components/EmptyFeed';

function ProfileDetail() {
  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:profile_infor')} />
      <ProfileDetailHeader numOfFeed={0} />
      <EmptyFeed />
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

export default memo(ProfileDetail);
