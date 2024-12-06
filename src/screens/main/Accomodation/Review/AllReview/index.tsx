/* eslint-disable react-native/no-inline-styles */
import {ReviewCardItem, TopNavigation} from '@/components/containers';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

const IMAGE =
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid';

const LIST_REVIEW = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const DATA = [
  ...LIST_REVIEW,
  ...LIST_REVIEW,
  ...LIST_REVIEW,
  ...LIST_REVIEW,
  ...LIST_REVIEW,
].map((item, index) => ({
  ...item,
  id: index + 1,
}));

function AllReview() {
  const renderItem = useCallback(() => {
    return (
      <ReviewCardItem
        image={IMAGE}
        name="Tui tên Testing"
        rating="4.8"
        content="“Thủy cung rất đẹp, mình như được lạc giữa chốn đại dương bao la để thưởng thức cảnh đẹp của biển cả.”"
      />
    );
  }, []);

  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 16}} />;
  }, []);

  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={
        <>
          <View style={styles.header}>
            <TopNavigation title={translate('source:review')} />
          </View>
        </>
      }
      ListFooterComponent={renderFooter}
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
  header: {
    marginBottom: 24,
  },
  footer: {
    width: '100%',
    height: 120,
  },
});

export default memo(AllReview);
