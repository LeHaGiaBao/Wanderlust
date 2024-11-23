import React, {memo, useCallback, useMemo, useRef, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {Devices, PrimaryColor, StatusColor} from '@/constants';
import {ExportCurve, Heart} from 'iconsax-react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

const images = [
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
];

function DetailHeader() {
  const [isFavorite, setIsFavorite] = useState(false);
  const ref = useRef<ICarouselInstance>(null);

  const IMAGE_DATA = images.map(i => i.image);

  const handleOnPressFavorite = useCallback(() => {
    setIsFavorite(!isFavorite);
  }, [isFavorite]);

  const rightNode = useMemo(() => {
    return (
      <View style={styles.rightContainer}>
        <View style={styles.iconContainer}>
          <ExportCurve size={20} color={PrimaryColor.Main} />
        </View>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={handleOnPressFavorite}>
          <Heart
            size={20}
            color={isFavorite ? StatusColor.Error : PrimaryColor.Main}
            variant={isFavorite ? 'Bold' : 'Linear'}
          />
        </TouchableOpacity>
      </View>
    );
  }, [handleOnPressFavorite, isFavorite]);

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        loop={true}
        width={Devices.width}
        height={350}
        data={IMAGE_DATA}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />
      <View style={styles.rightNodeContainer}>
        <TopNavigation rightNode={rightNode} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 350,
  },
  rightNodeContainer: {
    position: 'absolute',
    top: 77,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Devices.width,
    height: 350,
  },
});

export default memo(DetailHeader);
