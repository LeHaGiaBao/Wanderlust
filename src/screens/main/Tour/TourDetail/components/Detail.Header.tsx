import React, {memo, useCallback, useMemo, useRef, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {Devices, PrimaryColor, StatusColor} from '@/constants';
import {ExportCurve, Heart} from 'iconsax-react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

const images = [
  {
    id: 0,
    image: 'https://www.kkday.com/vi/blog/wp-content/uploads/du-lich-sapa.jpg',
  },
  {
    id: 1,
    image:
      'https://booking.muongthanh.com/upload_images/images/H%60/sa-pa-thi-tran-trong-suong.jpg',
  },
  {
    id: 2,
    image:
      'https://cdn.ahit.vn/thanhthanhtours/wp-content/uploads/2024/10/15002407/du-lich-sapa-cover.jpg',
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
