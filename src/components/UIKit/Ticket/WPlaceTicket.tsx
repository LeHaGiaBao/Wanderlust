import React, {memo, useCallback} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '@/assets/images';
import WText from '../Text/WText';
import translate from '@/translations/i18n';
import {Profile2User} from 'iconsax-react-native';
import {BaseColor, PrimaryColor} from '@/constants';
import {PlaceTicketProps} from '@/@types/styles';

const TICKET = images.Ticket;

function WTicket(props: PlaceTicketProps) {
  const {title, numberOfGuest, numerOfChildren, price, onEdit} = props;

  const handleEdit = useCallback(() => {
    onEdit?.();
  }, [onEdit]);

  return (
    <View>
      <ImageBackground
        source={TICKET}
        resizeMode="stretch"
        style={styles.imageBackground}>
        <View style={styles.leftContainer}>
          <View style={styles.leftContentHeader}>
            <WText text={title} typo="Body3" color="Black" numberOfLines={2} />
            <WText
              text={translate('source:detail')}
              typo="Label"
              color="Pressed"
            />
          </View>
          <View style={styles.leftContentContainer}>
            <View style={styles.leftContentHeader}>
              <View style={styles.item}>
                <Profile2User size={16} color={BaseColor.DarkGray} />
                <WText
                  text={translate('source:number_of_guests', {
                    n: numberOfGuest,
                  })}
                  typo="Label"
                  color="DarkGray"
                />
              </View>
              <View style={styles.item}>
                <Profile2User size={16} color={BaseColor.DarkGray} />
                <WText
                  text={translate('source:number_of_children', {
                    n: numerOfChildren,
                  })}
                  typo="Label"
                  color="DarkGray"
                />
              </View>
            </View>
            <View style={styles.price}>
              <WText text={price} typo="Body2" color="Error" />
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <WText
              text={translate('source:edit')}
              typo="Button2"
              color="Main"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 110,
  },
  leftContainer: {
    width: '55%',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 16,
    display: 'flex',
    gap: 24,
  },
  leftContentHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContentContainer: {
    display: 'flex',
    gap: 8,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  price: {
    display: 'flex',
    alignSelf: 'flex-end',
  },
  rightContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    marginRight: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: PrimaryColor.Main,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default memo(WTicket);
