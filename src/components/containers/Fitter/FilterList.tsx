/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BaseColor, PrimaryColor} from '@/constants';
import {WText} from '@/components/UIKit';

interface FilterListProps {
  data: any[];
}

function FilterList(props: FilterListProps) {
  const {data} = props;

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
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.filter}
      renderItem={renderFilter}
      ItemSeparatorComponent={renderFilterSeparator}
    />
  );
}

const styles = StyleSheet.create({
  filter: {
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

export default memo(FilterList);
