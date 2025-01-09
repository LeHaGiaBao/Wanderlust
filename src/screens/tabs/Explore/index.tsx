/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import TopNavBar from '../_components/TopNavBar';
import translate from '@/translations/i18n';
import {Add} from 'iconsax-react-native';
import FeedItem from '@/components/containers/Explore/FeedItem/FeedItem';
import {FlatList} from 'react-native-gesture-handler';

const MOCK_DATA = [
  {
    id: '1',
    image:
      'https://r2.nucuoimekong.com/wp-content/uploads/tour-lan-ngam-san-ho-phu-quoc-1-ngay.jpg',
    avatar:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid',
    name: 'John Doe',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, delectus aspernatur illo deleniti magni quam a eligendi laborum quasi iusto fugiat expedita voluptates quod minima temporibus sequi quia quidem? Alias!',
    tags: '#Travel #Food #Experience',
  },
  {
    id: '2',
    image:
      'https://r2.nucuoimekong.com/wp-content/uploads/tour-lan-ngam-san-ho-phu-quoc-1-ngay.jpg',
    avatar:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid',
    name: 'John Doe',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, delectus aspernatur illo deleniti magni quam a eligendi laborum quasi iusto fugiat expedita voluptates quod minima temporibus sequi quia quidem? Alias!',
    tags: '#Travel #Food #Experience',
  },
  {
    id: '3',
    image:
      'https://r2.nucuoimekong.com/wp-content/uploads/tour-lan-ngam-san-ho-phu-quoc-1-ngay.jpg',
    avatar:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid',
    name: 'John Doe',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, delectus aspernatur illo deleniti magni quam a eligendi laborum quasi iusto fugiat expedita voluptates quod minima temporibus sequi quia quidem? Alias!',
    tags: '#Travel #Food #Experience',
  },
];

const DATA = [...MOCK_DATA, ...MOCK_DATA, ...MOCK_DATA].map((item, index) => ({
  ...item,
  id: index + 1,
}));

function ExploreScreen() {
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const renderItem = useCallback(({item}: any) => {
    const {id, image, avatar, name, content, tags} = item;

    return (
      <FeedItem
        id={id}
        image={image}
        avatar={avatar}
        name={name}
        content={content}
        tags={tags}
      />
    );
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 20}} />;
  }, []);

  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  return (
    <>
      <FlatList
        style={styles.exploreScreen}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={
          <>
            <TopNavBar
              title={translate('source:hello')}
              subTitle={translate('source:share_experiences')}
              showSearchBar
              searchBarPlaceholder={translate('source:find_experiences')}
            />
          </>
        }
      />
      <TouchableOpacity style={styles.buttonCreate}>
        <Add size={40} variant="Linear" color={BaseColor.White} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  exploreScreen: {
    display: 'flex',
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  buttonCreate: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PrimaryColor.Main,
    borderRadius: 100,
  },
  footer: {
    width: '100%',
    height: 100,
  },
});

export default memo(ExploreScreen);
