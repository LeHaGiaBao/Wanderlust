/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SmallCardItem, TopNavigation} from '@/components/containers';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

const TOUR_DATA = [
  {
    id: 1,
    image:
      'https://vnpay.vn/s1/statics.vnpay.vn/2023/12/01qbb3ow95tc1702022318054.jpg',
    title: 'Săn mây Sapa ngắm Bình Minh',
    destination: 'Lào Cai, Việt Nam',
    price: '1.425.000VNĐ',
    discount: '-32%',
  },
  {
    id: 1,
    image:
      'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089730/Heritage-Cruise-1.jpg',
    title: 'Trải nghiệm du thuyền Hạ Long',
    destination: 'Hạ Long, Việt Nam',
    price: '3.425.000VNĐ',
    discount: '-24%',
  },
  {
    id: 1,
    image:
      'https://ik.imagekit.io/tvlk/blog/2022/11/khu-du-lich-trang-an-2.jpg?tr=dpr-2,w-675',
    title: 'Tour Tràng An, Ninh Bình',
    destination: 'Ninh Bình, Việt Nam',
    price: '2.100.000VNĐ',
    discount: '-18%',
  },
  {
    id: 1,
    image:
      'https://banahills.sunworld.vn/wp-content/uploads/2024/04/DJI_0004-1-scaled.jpg',
    title: 'Tour Bà Nà Hills',
    destination: 'Đà Nẵng, Việt Nam',
    price: '725.000VNĐ',
    discount: '-47%',
  },
];

const DATA = [
  ...TOUR_DATA,
  ...TOUR_DATA,
  ...TOUR_DATA,
  ...TOUR_DATA,
  ...TOUR_DATA,
].map((item, index) => ({
  ...item,
  id: index + 1,
}));

function AllTours() {
  const nav = useWanderlustNavigation();
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const goToTourDetail = useCallback(() => {
    nav.navigate(Routes.tour_detail);
  }, [nav]);

  const renderItem = useCallback(
    ({item}: any) => {
      const {image, title, destination, price, discount} = item;

      return (
        <SmallCardItem
          image={image}
          title={title}
          destination={destination}
          price={price}
          discount={discount}
          onPressItem={goToTourDetail}
        />
      );
    },
    [goToTourDetail],
  );

  const renderSeparator = useCallback(() => {
    return <View style={{height: 12}} />;
  }, []);

  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  return (
    <FlatList
      data={DATA}
      numColumns={2}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderSeparator}
      columnWrapperStyle={styles.columnWrapper}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={renderFooter}
      ListHeaderComponent={
        <>
          <View style={styles.header}>
            <TopNavigation title={translate('source:good_tour')} />
          </View>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  container: {
    display: 'flex',
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  columnWrapper: {
    flex: 1,
    gap: 10,
    justifyContent: 'space-between',
    backgroundColor: BaseColor.White,
  },
  footer: {
    width: '100%',
    height: 100,
  },
});

export default memo(AllTours);
