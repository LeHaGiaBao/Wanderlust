import {WText} from '@/components/UIKit';
import {Devices, PrimaryColor, SecondaryColor, StatusColor} from '@/constants';
import React, {memo, useCallback, useMemo, useRef, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Heart, Location, Star1} from 'iconsax-react-native';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {styles} from './styles';

interface CardItemProps {
  id?: string;
  images: Array<{image: string}>;
  title: string;
  destination?: string;
  star?: string;
  price?: string;
  discount?: string;
  onPressItem?: () => void;
  onPressFavorite?: () => void;
}

function CardItem(props: CardItemProps) {
  const {
    images,
    title,
    destination,
    star,
    price,
    discount,
    onPressItem,
    onPressFavorite,
  } = props;
  const [isFavorite, setIsFavorite] = useState(false);
  const ref = useRef<ICarouselInstance>(null);

  const handleOnPressFavorite = useCallback(() => {
    setIsFavorite(!isFavorite);
    onPressFavorite?.();
  }, [isFavorite, onPressFavorite]);

  const handleOnPressItem = useCallback(() => {
    onPressItem?.();
  }, [onPressItem]);

  const renderPrice = useMemo(() => {
    return (
      <>
        <View style={styles.divider} />
        <View style={styles.priceContainer}>
          <WText
            text={price ?? '1.890.000VNĐ / đêm'}
            typo="Body1"
            color="Error"
            numberOfLines={1}
          />
          <View style={styles.discount}>
            <WText
              text={discount ?? '-16%'}
              typo="Label"
              color="White"
              numberOfLines={1}
            />
          </View>
        </View>
      </>
    );
  }, [price, discount]);

  const IMAGE_DATA = images.map(i => i.image);

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleOnPressItem}>
      <Carousel
        ref={ref}
        loop={true}
        autoPlay
        autoPlayInterval={2000}
        width={Devices.width - 40}
        height={200}
        data={IMAGE_DATA}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />
      <View style={styles.contentCard}>
        <View style={styles.content}>
          <View style={styles.itemContent}>
            <WText
              text={title ?? 'Khách sạn Mường Thanh'}
              typo="Body1"
              color="Black"
              numberOfLines={1}
            />
            <View style={styles.location}>
              <Star1 size={12} variant="Bold" color={SecondaryColor.Yellow} />
              <WText
                text={star ?? '4.5'}
                typo="Body3"
                color="Black"
                numberOfLines={1}
              />
            </View>
            <View style={styles.location}>
              <Location size={12} variant="Bold" color={PrimaryColor.Main} />
              <WText
                text={destination ?? 'Nha Trang, Khánh Hoà, Việt Nam'}
                typo="Body3"
                color="DarkGray"
                numberOfLines={1}
              />
            </View>
          </View>
          <TouchableOpacity onPress={handleOnPressFavorite}>
            <Heart
              size={20}
              color={StatusColor.Error}
              variant={isFavorite ? 'Bold' : 'Linear'}
            />
          </TouchableOpacity>
        </View>
        {renderPrice}
      </View>
    </TouchableOpacity>
  );
}

export default memo(CardItem);
