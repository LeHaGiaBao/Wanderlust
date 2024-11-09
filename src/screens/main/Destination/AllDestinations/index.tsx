/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SmallCardItem, TopNavigation} from '@/components/containers';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import translate from '@/translations/i18n';
import {WText} from '@/components/UIKit';

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
  const renderFilter = useCallback(({item}: any) => {
    const {text, isActive} = item;
    const background = isActive ? PrimaryColor.Light : BaseColor.LightLightGray;

    return (
      <View style={[styles.filterItem, {backgroundColor: background}]}>
        <WText
          text={text}
          typo="Button2"
          color={isActive ? 'Main' : 'DarkGray'}
        />
      </View>
    );
  }, []);

  const renderFilterSeparator = useCallback(() => {
    return <View style={{width: 8}} />;
  }, []);

  return (
    <View style={styles.containerFilter}>
      <FlatList
        data={FILTER_DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filter}
        renderItem={renderFilter}
        ItemSeparatorComponent={renderFilterSeparator}
      />
    </View>
  );
});

function AllDestinations() {
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const renderItem = useCallback(({item}: any) => {
    const {image, title, destination} = item;

    return (
      <SmallCardItem image={image} title={title} destination={destination} />
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
            <TopNavigation title={translate('source:destination')} />
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
  },
  filter: {
    marginBottom: 12,
    display: 'flex',
    gap: 16,
  },
  filterItem: {
    height: 32,
    width: 'auto',
    paddingHorizontal: 8,
    paddingVertical: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  footer: {
    width: '100%',
    height: 100,
  },
});

export default memo(AllDestinations);
