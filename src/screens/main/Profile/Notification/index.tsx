import {TopNavigation} from '@/components/containers';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import translate from '@/translations/i18n';
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import NotificationItem from './components/NotificationItem';
import {NOTI_DATA} from './components/data';

const NOTIFICATION_DATA = [...NOTI_DATA, ...NOTI_DATA, ...NOTI_DATA].map(
  (item, index) => ({
    ...item,
    id: index + 1,
  }),
);

function NotificationScreen() {
  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const renderItem = useCallback(({item}: any) => {
    const {image, date, title, content} = item;

    return (
      <NotificationItem
        image={image}
        date={date}
        title={title}
        content={content}
      />
    );
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={styles.separator} />;
  }, []);

  const renderHeader = useCallback(() => {
    return (
      <View style={styles.header}>
        <TopNavigation title={translate('navigation:notification')} />
      </View>
    );
  }, []);

  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  return (
    <FlatList
      data={NOTIFICATION_DATA}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={renderFooter}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 77,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: PrimaryColor.Light,
    marginBottom: 8,
  },
  header: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  footer: {
    width: '100%',
    height: 100,
  },
});

export default memo(NotificationScreen);
