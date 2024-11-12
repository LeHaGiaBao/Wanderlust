import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import ProfileFeedHeader from './components/ProfileFeedHeader';
import EmptyFeed from './components/EmptyFeed';

function ProfileFeed() {
  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:profile_infor')} />
      <ProfileFeedHeader numOfFeed={0} />
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

export default memo(ProfileFeed);
