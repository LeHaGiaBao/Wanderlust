/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {WText} from '@/components/UIKit';
import MyBookUpcoming from './components/MyBookUpcoming';
import MyBookVisited from './components/MyBookVisited';

const DATA_UPCOMING = [
  {
    id: 1,
  },
];

const DATA = [
  {
    id: 1,
    isReview: false,
  },
  {
    id: 2,
    isReview: true,
  },
  {
    id: 3,
    isReview: true,
  },
];

function MyBooking() {
  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 8}} />;
  }, []);

  const renderItem = useCallback(({item}: any) => {
    const {isReview} = item;

    return <MyBookVisited isReview={isReview} />;
  }, []);

  const renderItemBookingUpcoming = useCallback(() => {
    return <MyBookUpcoming />;
  }, []);

  const renderMyBookUpcoming = useMemo(() => {
    return (
      <FlatList
        style={styles.upcomingBooking}
        data={DATA_UPCOMING}
        renderItem={renderItemBookingUpcoming}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        ItemSeparatorComponent={renderSeparator}
      />
    );
  }, [renderItemBookingUpcoming, renderSeparator]);

  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={
        <>
          <TopNavigation title={translate('source:my_booking')} />
          <View style={styles.contentContainer}>
            <WText
              text={translate('source:upcoming')}
              typo="Heading2"
              color="Black"
            />
            {renderMyBookUpcoming}
            <WText
              text={translate('source:visited')}
              typo="Heading2"
              color="Black"
            />
          </View>
        </>
      }
      ListFooterComponent={renderFooter}
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
  },
  contentContainer: {
    marginTop: 16,
    marginBottom: 8,
  },
  upcomingBooking: {
    marginTop: 8,
    marginBottom: 16,
  },
  footer: {
    width: '100%',
    height: 120,
  },
});

export default memo(MyBooking);
