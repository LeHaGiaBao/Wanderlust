import React, {memo, useCallback} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {WIcon, WText} from '@/components/UIKit';
import {PrimaryColor, StatusColor} from '@/constants';
import {Wifi, Card, TicketDiscount} from 'iconsax-react-native';
import translate from '@/translations/i18n';

interface RoomCardInterface {
  id: string;
  image: string;
  name: string;
  numOfBed: string;
  discountPercent?: string;
  discountPrice?: string;
  price: string;
  onPress?: () => void;
}

function RoomCard(props: RoomCardInterface) {
  const {
    id,
    image,
    name,
    numOfBed,
    discountPercent,
    discountPrice,
    price,
    onPress,
  } = props;

  const handleOnPress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  return (
    <View style={styles.container} key={id}>
      <View style={styles.header}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.headerContent}>
          <WText text={name} typo="Body1" color="Black" />
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <WIcon icon="bed" size={20} color={PrimaryColor.Pressed} />
              <WText
                text={translate('source:num_of_bed', {n: numOfBed})}
                typo="Body2"
                color="DarkGray"
              />
            </View>
            <View style={styles.item}>
              <Wifi size={20} color={PrimaryColor.Pressed} />
              <WText
                text={translate('source:wifi')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <WIcon icon="bath" size={20} color={PrimaryColor.Pressed} />
              <WText
                text={translate('source:bath')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
            <View style={styles.item}>
              <WIcon icon="swim" size={20} color={PrimaryColor.Pressed} />
              <WText
                text={translate('source:swim')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.content}>
        <View style={styles.item}>
          <WIcon icon="knife" size={20} color={PrimaryColor.Pressed} />
          <WText
            text={translate('source:free_breakfast')}
            typo="Body2"
            color="DarkGray"
          />
        </View>
        <View style={styles.item}>
          <Card size={20} color={PrimaryColor.Pressed} />
          <WText
            text={translate('source:online_payment')}
            typo="Body2"
            color="DarkGray"
          />
        </View>
        {discountPercent && (
          <View style={styles.voucher}>
            <TicketDiscount size={20} color={StatusColor.Error} />
            <WText
              text={translate('source:voucher_discount', {n: discountPercent})}
              typo="Label"
              color="Error"
            />
          </View>
        )}
      </View>
      <View style={styles.divider} />
      <View style={styles.priceContainer}>
        {discountPrice && (
          <WText
            text={discountPrice || ''}
            color="Gray"
            typo="Body2"
            decoration="line-through"
          />
        )}
        <WText text={price} color="Error" typo="Body1" />
        <TouchableOpacity style={styles.button} onPress={handleOnPress}>
          <WText
            text={translate('source:book_room')}
            typo="Button2"
            color="White"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default memo(RoomCard);
