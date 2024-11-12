import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import HomeDestination from './Home.Destination';
import {FilterList} from '@/components/containers';
import translate from '@/translations/i18n';

const FILTER_DATA = [
  {
    id: 1,
    text: translate('source:destination_filter:all'),
    isActive: true,
  },
  {
    id: 2,
    text: translate('source:destination_filter:popular'),
    isActive: false,
  },
  {
    id: 3,
    text: translate('source:destination_filter:near'),
    isActive: false,
  },
  {
    id: 4,
    text: translate('source:destination_filter:most_visit'),
    isActive: false,
  },
];

function HomeDestinationList() {
  return (
    <View style={styles.container}>
      <FilterList data={FILTER_DATA} />
      <HomeDestination />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    display: 'flex',
  },
});

export default memo(HomeDestinationList);
