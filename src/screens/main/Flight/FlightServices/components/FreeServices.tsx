import {WText} from '@/components/UIKit';
import {BaseColor} from '@/constants';
import translate from '@/translations/i18n';
import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';

const image =
  'https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg';

function FreeServices() {
  return (
    <View style={styles.content}>
      <WText
        text={translate('source:departure_title')}
        typo="Heading2"
        color="Main"
      />
      <View style={styles.item}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.contentContainer}>
          <WText text="SGN - PQC" typo="Body2" color="Black" />
          <WText
            text="Hạng vé này không có dịch vụ miễn phí đi kèm."
            typo="Body3"
            color="DarkGray"
          />
        </View>
      </View>

      <View style={styles.divider} />

      <WText
        text={translate('source:arrival_title')}
        typo="Heading2"
        color="Main"
      />
      <View style={styles.item}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.contentContainer}>
          <WText text="PQC - SGN" typo="Body2" color="Black" />
          <WText
            text="Hạng vé này không có dịch vụ miễn phí đi kèm."
            typo="Body3"
            color="DarkGray"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 24,
  },
  item: {
    marginVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  image: {
    height: 24,
    width: 24,
    borderRadius: 4,
  },
  contentContainer: {
    display: 'flex',
    gap: 4,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginBottom: 16,
  },
});

export default memo(FreeServices);
