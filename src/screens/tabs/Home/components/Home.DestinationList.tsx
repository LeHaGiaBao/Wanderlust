/* eslint-disable react-native/no-inline-styles */
import {WText} from '@/components/UIKit';
import {BaseColor, PrimaryColor} from '@/constants';
import translate from '@/translations/i18n';
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import HomeDestination from './Home.Destination';

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
  const renderFilter = useCallback(({item}: any) => {
    const {text, isActive} = item;
    const background = isActive ? PrimaryColor.Light : BaseColor.LightLightGray;

    return (
      <View style={[styles.filterItem, {backgroundColor: background}]}>
        <WText
          text={text}
          typo="Button2"
          color={isActive ? 'Main' : 'DarkGray'}
        />
      </View>
    );
  }, []);

  const renderFilterSeparator = useCallback(() => {
    return <View style={{width: 8}} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={FILTER_DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filter}
        renderItem={renderFilter}
        ItemSeparatorComponent={renderFilterSeparator}
      />
      <HomeDestination />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  filter: {
    marginTop: 12,
    display: 'flex',
    gap: 16,
  },
  filterItem: {
    height: 32,
    width: 'auto',
    paddingHorizontal: 8,
    paddingVertical: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default memo(HomeDestinationList);
