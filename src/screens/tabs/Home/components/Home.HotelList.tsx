/* eslint-disable react-native/no-inline-styles */
import {SmallCardItem} from '@/components/containers';
import {BaseColor} from '@/constants';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

const HOTEL_DATA = [
  {
    id: 1,
    image:
      'https://q-xx.bstatic.com/xdata/images/hotel/max500/418748574.jpg?k=27520c03e506ee0753e3603062c72a0d56b6edf8b5b0264d5502e498e43f8650&o=',
    title: 'Khách sạn Mường Thanh',
    destination: 'Khánh Hoà, Việt Nam',
    star: '4.5',
  },
  {
    id: 2,
    image:
      'https://ik.imagekit.io/tvlk/image/imageResource/2024/05/17/1715909688078-5de0e3d50292c27c26eccf59b5679e08.jpeg',
    title: 'Khách sạn Dương Đông',
    destination: 'Phú Quốc, Việt Nam',
    star: '4.8',
  },
  {
    id: 3,
    image:
      'https://cf.bstatic.com/xdata/images/hotel/max1024x768/412883158.jpg?k=a220ece8f04054da35466bd13ee87342354cc18122b73eb0fbdcfef850115325&o=&hp=1',
    title: 'Khu nghỉ dưỡng Vinpearl',
    destination: 'Khánh Hoà, Việt Nam',
    star: '4.8',
  },
];

function HomeHotelList() {
  const nav = useWanderlustNavigation();

  const goToHotelDetail = useCallback(() => {
    nav.navigate(Routes.hotel_detail);
  }, [nav]);

  const renderItem = useCallback(
    ({item}: any) => {
      const {image, title, destination, star} = item;

      return (
        <SmallCardItem
          isHorizontal={true}
          image={image}
          title={title}
          destination={destination}
          star={star}
          onPressItem={goToHotelDetail}
        />
      );
    },
    [goToHotelDetail],
  );

  const renderHotelSeparator = useCallback(() => {
    return <View style={{height: 12, width: 16}} />;
  }, []);

  return (
    <FlatList
      data={HOTEL_DATA}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={renderItem}
      ItemSeparatorComponent={renderHotelSeparator}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 12,
    paddingBottom: 20,
    backgroundColor: BaseColor.White,
  },
});

export default memo(HomeHotelList);
