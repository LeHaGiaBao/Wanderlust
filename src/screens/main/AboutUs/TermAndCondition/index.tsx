/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {WText} from '@/components/UIKit';

const TERM_AND_CONDITION_DATA = [
  {
    id: 1,
    text: translate('source:term_and_condition_list:header_1'),
  },
  {
    id: 2,
    text: translate('source:term_and_condition_list:header_2'),
  },
];

const DATA_TITLE_1 = [
  {
    id: 1,
    text: translate(
      'source:term_and_condition_list:term_title_description_1:des_1',
    ),
  },
  {
    id: 2,
    text: translate(
      'source:term_and_condition_list:term_title_description_1:des_2',
    ),
  },
];

const DATA_TITLE_2 = [
  {
    id: 1,
    text: translate(
      'source:term_and_condition_list:term_title_description_2:des_1',
    ),
  },
];

const DATA_TITLE_3 = [
  {
    id: 1,
    text: translate(
      'source:term_and_condition_list:term_title_description_3:des_1',
    ),
  },
  {
    id: 2,
    text: translate(
      'source:term_and_condition_list:term_title_description_3:des_2',
    ),
  },
  {
    id: 3,
    text: translate(
      'source:term_and_condition_list:term_title_description_3:des_3',
    ),
  },
  {
    id: 4,
    text: translate(
      'source:term_and_condition_list:term_title_description_3:des_4',
    ),
  },
  {
    id: 5,
    text: translate(
      'source:term_and_condition_list:term_title_description_3:des_5',
    ),
  },
];

function TermAndCondition() {
  const renderItem = useCallback(({item}: any) => {
    const {text} = item;

    return <WText text={text} typo="Body2" color="Gray" />;
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 16}} />;
  }, []);

  const renderFooter = useMemo(() => {
    return <View style={{height: 100}} />;
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={TERM_AND_CONDITION_DATA}
      showsVerticalScrollIndicator={false}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={
        <>
          <View style={styles.header}>
            <TopNavigation title={translate('source:term_and_condition')} />
          </View>
        </>
      }
      ListFooterComponent={
        <>
          <View style={styles.title}>
            <WText
              text={translate('source:term_and_condition_list:term_title_1')}
              typo="Body2"
              color="Main"
            />
          </View>
          <FlatList
            data={DATA_TITLE_1}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
          />
          <View style={styles.title}>
            <WText
              text={translate('source:term_and_condition_list:term_title_2')}
              typo="Body2"
              color="Main"
            />
          </View>
          <FlatList
            data={DATA_TITLE_2}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
          />
          <View style={styles.title}>
            <WText
              text={translate('source:term_and_condition_list:term_title_3')}
              typo="Body2"
              color="Main"
            />
          </View>
          <FlatList
            data={DATA_TITLE_3}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            ItemSeparatorComponent={renderSeparator}
          />
          {renderFooter}
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
  title: {
    marginVertical: 16,
  },
});

export default memo(TermAndCondition);
