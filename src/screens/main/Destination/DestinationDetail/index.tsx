/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import DetailHeader from './components/Detail.Header';
import DetailContent from './components/Detail.Content';
import {WButton} from '@/components/UIKit';
import translate from '@/translations/i18n';
import {RoomCard} from '@/components/containers';
import DetailReview from './components/Detail.Review';
import DetailTicket from './components/Detail.Ticket';
import {NavigationHeader} from '../../_components';

const DATA = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

function DestinationDetail() {
  const renderItem = useCallback(() => {
    return (
      <View style={styles.itemContainer}>
        <RoomCard />
      </View>
    );
  }, []);

  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 16}} />;
  }, []);

  return (
    <>
      <FlatList
        style={styles.container}
        data={DATA}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={
          <>
            <DetailHeader />
            <DetailContent />
            <DetailReview />
            <DetailTicket />
            <View style={styles.recommendHeader}>
              <NavigationHeader
                title={translate('source:accommodation_recommend')}
                navigateTitle={translate('source:view_more')}
              />
            </View>
          </>
        }
        ListFooterComponent={renderFooter}
      />
      <View style={styles.buttonContainer}>
        <WButton
          text={translate('source:buy_ticket_now')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    borderTopWidth: 1,
    borderTopColor: BaseColor.LightLightGray,
  },
  recommendHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 16,
  },
  itemContainer: {
    marginHorizontal: 16,
  },
  footer: {
    width: '100%',
    height: 120,
  },
});

export default memo(DestinationDetail);
