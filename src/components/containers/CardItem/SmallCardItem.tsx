import {WText} from '@/components/UIKit';
import {BaseColor, PrimaryColor, StatusColor} from '@/constants';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Heart, Location} from 'iconsax-react-native';

interface SmallCardItemProps {
  id?: string;
  image: string;
  title: string;
  destination: string;
  price?: string;
  discount?: string;
  onPressItem?: () => void;
  onPressFavorite?: () => void;
}

function SmallCardItem(props: SmallCardItemProps) {
  const {
    image,
    title,
    destination,
    price,
    discount,
    onPressItem,
    onPressFavorite,
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
    return (
      <View>
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
      </View>
    );
  }, [price, discount]);

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
        {price && renderPrice}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 0.5,
    display: 'flex',
    width: '100%',
    height: 'auto',
    borderRadius: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowColor: '#C9C9C9',
    elevation: 5,
    padding: 4,
  },
  image: {
    width: '100%',
    height: 106,
    borderRadius: 4,
  },
  contentCard: {
    marginVertical: 8,
    marginHorizontal: 8,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemContent: {
    flex: 2.5 / 3,
  },
  location: {
    marginTop: 4,
    flex: 1 / 3,
    flexDirection: 'row',
    gap: 4,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginVertical: 8,
  },
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  discount: {
    width: 'auto',
    height: 20,
    borderRadius: 50,
    padding: 4,
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: StatusColor.Error,
  },
});

export default memo(SmallCardItem);
