/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {CardItem, FilterList, TopNavigation} from '@/components/containers';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';

const HOTEL_DATA = [
  {
    id: 1,
    images: [
      {
        id: 0,
        image:
          'https://vnpay.vn/s1/statics.vnpay.vn/2023/12/01qbb3ow95tc1702022318054.jpg',
      },
      {
        id: 1,
        image:
          'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089730/Heritage-Cruise-1.jpg',
      },
      {
        id: 2,
        image:
          'https://ik.imagekit.io/tvlk/blog/2022/11/khu-du-lich-trang-an-2.jpg?tr=dpr-2,w-675',
      },
    ],
    title: 'Săn mây Sapa ngắm Bình Minh',
    destination: 'Lào Cai, Việt Nam',
    price: '1.425.000VNĐ',
    discount: '-32%',
  },
  {
    id: 2,
    images: [
      {
        id: 0,
        image:
          'https://vnpay.vn/s1/statics.vnpay.vn/2023/12/01qbb3ow95tc1702022318054.jpg',
      },
      {
        id: 1,
        image:
          'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089730/Heritage-Cruise-1.jpg',
      },
      {
        id: 2,
        image:
          'https://ik.imagekit.io/tvlk/blog/2022/11/khu-du-lich-trang-an-2.jpg?tr=dpr-2,w-675',
      },
    ],
    title: 'Trải nghiệm du thuyền Hạ Long',
    destination: 'Hạ Long, Việt Nam',
    price: '3.425.000VNĐ',
    discount: '-24%',
  },
  {
    id: 3,
    images: [
      {
        id: 0,
        image:
          'https://vnpay.vn/s1/statics.vnpay.vn/2023/12/01qbb3ow95tc1702022318054.jpg',
      },
      {
        id: 1,
        image:
          'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089730/Heritage-Cruise-1.jpg',
      },
      {
        id: 2,
        image:
          'https://ik.imagekit.io/tvlk/blog/2022/11/khu-du-lich-trang-an-2.jpg?tr=dpr-2,w-675',
      },
    ],
    title: 'Tour Tràng An, Ninh Bình',
    destination: 'Ninh Bình, Việt Nam',
    price: '2.100.000VNĐ',
    discount: '-18%',
  },
  {
    id: 4,
    images: [
      {
        id: 0,
        image:
          'https://vnpay.vn/s1/statics.vnpay.vn/2023/12/01qbb3ow95tc1702022318054.jpg',
      },
      {
        id: 1,
        image:
          'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089730/Heritage-Cruise-1.jpg',
      },
      {
        id: 2,
        image:
          'https://ik.imagekit.io/tvlk/blog/2022/11/khu-du-lich-trang-an-2.jpg?tr=dpr-2,w-675',
      },
    ],
    title: 'Tour Bà Nà Hills',
    destination: 'Đà Nẵng, Việt Nam',
    price: '725.000VNĐ',
    discount: '-47%',
  },
];

const FILTER_DATA = [
  {
    id: 1,
    text: translate('source:destination_filter:all'),
    isActive: true,
  },
  {
    id: 2,
    text: translate('source:destination_filter:popular'),
    isActive: false,
  },
  {
    id: 3,
    text: translate('source:destination_filter:near'),
    isActive: false,
  },
  {
    id: 4,
    text: translate('source:destination_filter:most_visit'),
    isActive: false,
  },
];

const DATA = [
  ...HOTEL_DATA,
  ...HOTEL_DATA,
  ...HOTEL_DATA,
  ...HOTEL_DATA,
  ...HOTEL_DATA,
].map((item, index) => ({
  ...item,
  id: index + 1,
}));

const RenderHeader = memo(() => {
  return (
    <View style={styles.containerFilter}>
      <FilterList data={FILTER_DATA} />
    </View>
  );
});

function AllAccomodations() {
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const renderItem = useCallback(({item}: any) => {
    const {images, title, destination, price, discount} = item;

    return (
      <CardItem
        images={images}
        title={title}
        destination={destination}
        price={price}
        discount={discount}
      />
    );
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 12}} />;
  }, []);

  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  return (
    <FlatList
      data={DATA}
      style={styles.container}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={renderSeparator}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={renderFooter}
      ListHeaderComponent={
        <>
          <View style={styles.header}>
            <TopNavigation
              title={translate('source:accommodation_recommend')}
            />
          </View>
          <RenderHeader />
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
  },
  columnWrapper: {
    flex: 1,
    gap: 10,
    justifyContent: 'space-between',
    backgroundColor: BaseColor.White,
  },
  header: {
    marginBottom: 24,
  },
  containerFilter: {
    display: 'flex',
    marginBottom: 12,
  },
  footer: {
    width: '100%',
    height: 100,
  },
});

export default memo(AllAccomodations);
