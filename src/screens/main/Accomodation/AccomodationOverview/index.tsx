/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {WText} from '@/components/UIKit';

const OVERVIEW_TEMPLATE_DATA = [
  {
    id: 1,
    text: translate('source:overview_template:list_1'),
  },
  {
    id: 2,
    text: translate('source:overview_template:list_2'),
  },
  {
    id: 3,
    text: translate('source:overview_template:list_3'),
  },
  {
    id: 4,
    text: translate('source:overview_template:list_4'),
  },
];

function AccomodationOverview() {
  const renderItem = useCallback(({item}: any) => {
    const {text} = item;

    return <WText text={text} typo="Body2" color="Gray" />;
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 16}} />;
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={OVERVIEW_TEMPLATE_DATA}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={
        <>
          <View style={styles.header}>
            <TopNavigation title={translate('source:overview')} />
          </View>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
    width: Devices.width,
  },
  header: {
    marginBottom: 24,
  },
});

export default memo(AccomodationOverview);
