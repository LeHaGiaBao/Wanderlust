/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import DetailHeader from './components/Detail.Header';
import DetailContent from './components/Detail.Content';
import translate from '@/translations/i18n';
import {BookingEdit, RoomCard} from '@/components/containers';
import DetailReview from './components/Detail.Review';
import {NavigationHeader} from '../../_components';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';
import {WButton} from '@/components/UIKit';

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

function HotelDetail() {
  const nav = useWanderlustNavigation();

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

  const onPressNavigate = useCallback(() => {
    nav.navigate(Routes.accomodation_recommend);
  }, [nav]);

  const handleBookRoom = useCallback(() => {
    nav.navigate(Routes.payment_confirm);
  }, [nav]);

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
            <View style={{backgroundColor: BaseColor.White}}>
              <DetailReview />
            </View>
            <View style={styles.recommendHeader}>
              <NavigationHeader
                title={translate('source:booking_info')}
                navigateTitle={translate('source:edit')}
                onPress={onPressNavigate}
              />
            </View>
            <View style={styles.bookingEdit}>
              <BookingEdit />
            </View>
          </>
        }
        ListFooterComponent={renderFooter}
      />
      <View style={styles.buttonContainer}>
        <WButton
          text={translate('source:book_room')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
          onPress={handleBookRoom}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#A1DFDF',
    height: Devices.height,
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
  bookingEdit: {
    marginHorizontal: 16,
    marginBottom: 16,
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
});

export default memo(HotelDetail);
