import React, {memo} from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {WText} from '@/components/UIKit';
import {PrimaryColor} from '@/constants';
import {Wifi} from 'iconsax-react-native';

const IMAGE =
  'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089730/Heritage-Cruise-1.jpg';

function RoomCard() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{uri: IMAGE}} style={styles.image} />
        <View style={styles.headerContent}>
          <WText text="Station Hostel" typo="Body1" color="Black" />
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <WText text="1 Giường lớn" typo="Body2" color="DarkGray" />
            </View>
            <View style={styles.item}>
              <Wifi size={20} color={PrimaryColor.Pressed} />
              <WText text="Wifi" typo="Body2" color="DarkGray" />
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <WText text="Bồn tắm" typo="Body2" color="DarkGray" />
            </View>
            <View style={styles.item}>
              <WText text="Hồ bơi" typo="Body2" color="DarkGray" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default memo(RoomCard);
