/* eslint-disable react-native/no-inline-styles */
import {SmallCardItem} from '@/components/containers';
import {BaseColor} from '@/constants';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

const FLIGHT_DATA = [
  {
    id: 1,
    image:
      'https://e-magazine.asiamedia.vn/wp-content/uploads/2024/01/tct-hang-khong-viet-nam-600.png',
    title: 'TP.HCM - Quy Nhơn',
    date: '14.12.2024',
    price: '1.234.000VNĐ',
    discount: '1.800.000VNĐ',
  },
  {
    id: 2,
    image: 'https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg',
    title: 'TP.HCM - Phú Quốc',
    date: '15.12.2024',
    price: '1.567.000VNĐ',
    discount: '1.800.000VNĐ',
  },
  {
    id: 3,
    image:
      'https://e-magazine.asiamedia.vn/wp-content/uploads/2024/01/tct-hang-khong-viet-nam-600.png',
    title: 'TP.HCM - Hà Nội',
    date: '16.12.2024',
    price: '1.234.000VNĐ',
    discount: '1.800.000VNĐ',
  },
];

function HomeFlightList() {
  const nav = useWanderlustNavigation();

  const goToFlightDetail = useCallback(() => {
    nav.navigate(Routes.flight_detail);
  }, [nav]);

  const renderItem = useCallback(
    ({item}: any) => {
      const {image, title, date, price, discount} = item;

      return (
        <SmallCardItem
          isHorizontal={true}
          image={image}
          title={title}
          date={date}
          price={price}
          discount={discount}
          onPressItem={goToFlightDetail}
        />
      );
    },
    [goToFlightDetail],
  );

  const renderHotelSeparator = useCallback(() => {
    return <View style={{height: 12, width: 16}} />;
  }, []);

  return (
    <FlatList
      data={FLIGHT_DATA}
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

export default memo(HomeFlightList);
