/* eslint-disable react-native/no-inline-styles */
import {WText} from '@/components/UIKit';
import {PrimaryColor, SecondaryColor, StatusColor} from '@/constants';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Heart, Location, Star1} from 'iconsax-react-native';
import {styles} from './styles';

interface SmallCardItemProps {
  id?: string;
  image: string;
  title: string;
  destination: string;
  star?: string;
  date?: string;
  price?: string;
  discount?: string;
  onPressItem?: () => void;
  onPressFavorite?: () => void;
  isHorizontal?: boolean;
}

function SmallCardItem(props: SmallCardItemProps) {
  const {
    image,
    title,
    destination,
    star,
    date,
    price,
    discount,
    onPressItem,
    onPressFavorite,
    isHorizontal = false,
  } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOnPressFavorite = useCallback(() => {
    setIsFavorite(!isFavorite);
    onPressFavorite?.();
  }, [isFavorite, onPressFavorite]);

  const handleOnPressItem = useCallback(() => {
    onPressItem?.();
  }, [onPressItem]);

  const renderPrice = useMemo(() => {
    if (isHorizontal) {
      return (
        <>
          <View style={{marginTop: 2}}>
            <WText
              text={date ?? ''}
              typo="Label"
              color="DarkGray"
              numberOfLines={1}
            />
          </View>
          <View style={styles.dividerHorizontal} />
          <View style={styles.priceContainerHorizontal}>
            <WText
              text={price ?? ''}
              typo="Body3"
              color="Error"
              numberOfLines={1}
            />
            <WText
              text={discount ?? ''}
              typo="Label"
              color="Gray"
              numberOfLines={1}
            />
          </View>
        </>
      );
    }

    return (
      <>
        <View style={styles.divider} />
        <View style={styles.priceContainer}>
          <WText
            text={price ?? ''}
            typo="Body2"
            color="Error"
            numberOfLines={1}
          />
          {discount && (
            <View style={styles.discount}>
              <WText
                text={discount ?? ''}
                typo="Label"
                color="White"
                numberOfLines={1}
              />
            </View>
          )}
        </View>
      </>
    );
  }, [isHorizontal, date, price, discount]);

  if (isHorizontal) {
    return (
      <TouchableOpacity
        style={styles.cardContainerHorizontal}
        onPress={handleOnPressItem}>
        <View style={styles.contentHorizontal}>
          <Image source={{uri: image}} style={styles.imageHorizontal} />
          <View>
            <WText text={title} typo="Body2" color="Black" numberOfLines={1} />
            {!price && (
              <>
                <View style={styles.star}>
                  <Star1
                    size={12}
                    variant="Bold"
                    color={SecondaryColor.Yellow}
                  />
                  <WText
                    text={star ?? ''}
                    typo="Label"
                    color="Black"
                    numberOfLines={1}
                  />
                </View>
                <View style={styles.location}>
                  <Location
                    size={12}
                    variant="Bold"
                    color={PrimaryColor.Main}
                  />
                  <WText
                    text={destination}
                    typo="Body3"
                    color="DarkGray"
                    numberOfLines={1}
                  />
                </View>
              </>
            )}
            {price && renderPrice}
          </View>
        </View>
        <TouchableOpacity onPress={handleOnPressFavorite}>
          <Heart
            size={20}
            color={StatusColor.Error}
            variant={isFavorite ? 'Bold' : 'Linear'}
            style={{marginRight: 4}}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleOnPressItem}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.contentCard}>
        <View style={styles.content}>
          <View style={styles.itemContent}>
            <WText text={title} typo="Body2" color="Black" numberOfLines={1} />
            <View style={styles.location}>
              <Location size={12} variant="Bold" color={PrimaryColor.Main} />
              <WText
                text={destination}
                typo="Label"
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
        {price && renderPrice}
      </View>
    </TouchableOpacity>
  );
}

export default memo(SmallCardItem);
