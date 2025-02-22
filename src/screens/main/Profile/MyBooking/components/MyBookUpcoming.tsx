import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {BaseColor, PrimaryColor} from '@/constants';
import {WText} from '@/components/UIKit';
import {Calendar} from 'iconsax-react-native';

const image =
  'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089730/Heritage-Cruise-1.jpg';

function MyBookUpcoming() {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.bookingContent}>
        <WText
          text="Khu nghĩ dưỡng Vinpearl Wonderworld Phú Quốc"
          typo="Body2"
          color="Black"
          numberOfLines={2}
        />
        <WText
          text="Biệt thự Rose, 1 phòng ngủ lớn"
          typo="Body3"
          color="DarkGray"
        />
        <View style={styles.calendar}>
          <Calendar size={16} color={PrimaryColor.Main} />
          <WText text="14/12/2023" typo="Body3" color="Main" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    padding: 4,
    borderRadius: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowColor: '#C9C9C9',
    elevation: 5,
  },
  image: {
    width: 125,
    height: 70,
    borderRadius: 8,
  },
  bookingContent: {
    width: '50%',
    display: 'flex',
    gap: 4,
  },
  calendar: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
});

export default memo(MyBookUpcoming);
