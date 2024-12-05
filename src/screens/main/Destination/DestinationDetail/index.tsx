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

const LIST_HOTEL = [
  {
    id: 1,
    image:
      'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089730/Heritage-Cruise-1.jpg',
    name: 'Station Hostel',
    numOfBed: '1',
    discountPercent: '40',
    discountPrice: '250.000 VND / người',
    price: '100.000 - 150.000 VND / người',
  },
  {
    id: 2,
    image:
      'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089730/Heritage-Cruise-1.jpg',
    name: 'The Fish Hotel',
    numOfBed: '1',
    discountPercent: '25',
    discountPrice: '320.000 VND / người',
    price: '230.000 VND / người',
  },
  {
    id: 2,
    image:
      'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089730/Heritage-Cruise-1.jpg',
    name: 'The Hotel',
    numOfBed: '1',
    discountPercent: '15',
    discountPrice: '500.000 VND / người',
    price: '300.000 VND / người',
  },
];

const DATA = [
  ...LIST_HOTEL,
  ...LIST_HOTEL,
  ...LIST_HOTEL,
  ...LIST_HOTEL,
  ...LIST_HOTEL,
].map((item, index) => ({
  ...item,
  id: index + 1,
}));

function DestinationDetail() {
  const renderItem = useCallback(({item}: any) => {
    const {id, image, name, numOfBed, discountPercent, discountPrice, price} =
      item;

    return (
      <View style={styles.itemContainer}>
        <RoomCard
          id={id}
          image={image}
          name={name}
          numOfBed={numOfBed}
          discountPercent={discountPercent}
          discountPrice={discountPrice}
          price={price}
        />
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
    marginBottom: 8,
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
