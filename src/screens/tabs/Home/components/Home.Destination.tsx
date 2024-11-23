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
      'https://rootytrip.com/wp-content/uploads/2023/10/thuy-cung-vinpearl-phu-quoc-0.jpg',
    title: 'Thuỷ cung Vinpearl',
    destination: 'Phú Quốc, Việt Nam',
  },
  {
    id: 2,
    image:
      'https://i2.ex-cdn.com/crystalbay.com/files/content/2024/10/15/vinh-ha-long-ve-dep-cua-ky-quan-da-3-lan-duoc-vinh-danh-la-di-san-the-gioi-1114.jpg',
    title: 'Vinh Hạ Long',
    destination: 'Quảng Ninh, Việt Nam',
  },
  {
    id: 3,
    image:
      'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/08/hoi-an-quang-nam-vntrip.jpg',
    title: 'Phố cổ Hội An',
    destination: 'Quảng Nam, Việt Nam',
  },
  {
    id: 3,
    image:
      'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_3000,h_1684/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ukykclh6jireescsohoj/V%C3%A9ThamQuanThungL%C5%A9ngT%C3%ACnhY%C3%AAu%E1%BB%9F%C4%90%C3%A0L%E1%BA%A1t-KlookVi%E1%BB%87tNam.jpg',
    title: 'Thung lũng Tình Yêu',
    destination: 'Đà Lạt, Việt Nam',
  },
];

function HomeDestination() {
  const nav = useWanderlustNavigation();

  const renderItem = useCallback(
    ({item}: any) => {
      const {image, title, destination} = item;

      const handleNavigation = () => {
        nav.navigate(Routes.destination_detail);
      };

      return (
        <SmallCardItem
          image={image}
          title={title}
          destination={destination}
          onPressItem={handleNavigation}
        />
      );
    },
    [nav],
  );

  const renderHotelSeparator = useCallback(() => {
    return <View style={{height: 12}} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={HOTEL_DATA}
        numColumns={2}
        style={styles.hotel}
        renderItem={renderItem}
        ItemSeparatorComponent={renderHotelSeparator}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  hotel: {
    paddingTop: 12,
    paddingBottom: 20,
    backgroundColor: BaseColor.White,
  },
  columnWrapper: {
    flex: 1,
    gap: 10,
    justifyContent: 'space-between',
    backgroundColor: BaseColor.White,
  },
});

export default memo(HomeDestination);
