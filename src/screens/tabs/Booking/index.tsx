import React, {memo, useCallback, useMemo, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import images from '@/assets/images';
import TopNavBar from '../_components/TopNavBar';
import translate from '@/translations/i18n';
import {WIcon, WText} from '@/components/UIKit';
import {Bus} from 'iconsax-react-native';
import BookingSearchHotel from './components/Booking.SearchHotel';
import BookingSearchFlight from './components/Booking.SearchFlight';

const IMAGE_DATA = [
  {
    key: 'hotel',
    image: images.Hotel,
  },
  {
    key: 'plane',
    image: images.Plane,
  },
  {
    key: 'train',
    image: null,
  },
];

function BookingScreen() {
  const [itemActive, setItemActive] = useState<'hotel' | 'plane' | 'train'>(
    'hotel',
  );

  const handlePress = useCallback((key: any) => {
    setItemActive(key);
  }, []);

  const activeImage = useMemo(() => {
    return IMAGE_DATA.find(item => item.key === itemActive)?.image;
  }, [itemActive]);

  const renderNavigation = useMemo(() => {
    if (itemActive === 'train') {
      return (
        <TopNavBar
          title={translate('source:hello')}
          titleColor="White"
          subTitle={translate('source:choose_train')}
          subTitleColor="White"
        />
      );
    }
    if (itemActive === 'plane') {
      return (
        <TopNavBar
          title={translate('source:hello')}
          titleColor="White"
          subTitle={translate('source:choose_flight')}
          subTitleColor="White"
        />
      );
    }
    return (
      <TopNavBar
        title={translate('source:hello')}
        titleColor="White"
        subTitle={translate('source:choose_hotel')}
        subTitleColor="White"
      />
    );
  }, [itemActive]);

  const navigationBar = useMemo(() => {
    return (
      <View style={styles.navigation}>
        <TouchableOpacity
          style={[
            styles.navigationItem,
            {
              backgroundColor:
                itemActive === 'hotel' ? PrimaryColor.Main : BaseColor.White,
            },
          ]}
          key={'hotel'}
          onPress={() => handlePress('hotel')}>
          <WIcon
            icon={itemActive === 'hotel' ? 'buliding-white' : 'building'}
            size={16}
          />
          <WText
            text={translate('source:book_room')}
            typo="Button2"
            color={itemActive === 'hotel' ? 'White' : 'Main'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navigationItem,
            {
              backgroundColor:
                itemActive === 'plane' ? PrimaryColor.Main : BaseColor.White,
            },
          ]}
          key={'plane'}
          onPress={() => handlePress('plane')}>
          <WIcon
            icon={itemActive === 'plane' ? 'airplane-white' : 'airplane'}
            size={16}
          />
          <WText
            text={translate('source:find_plane')}
            typo="Button2"
            color={itemActive === 'plane' ? 'White' : 'Main'}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navigationItem,
            {
              backgroundColor:
                itemActive === 'train' ? PrimaryColor.Main : BaseColor.White,
            },
          ]}
          key={'train'}
          onPress={() => handlePress('train')}>
          <Bus
            size={16}
            color={itemActive === 'train' ? BaseColor.White : PrimaryColor.Main}
            variant="Bold"
          />
          <WText
            text={translate('source:find_train')}
            typo="Button2"
            color={itemActive === 'train' ? 'White' : 'Main'}
          />
        </TouchableOpacity>
      </View>
    );
  }, [handlePress, itemActive]);

  const renderFormField = useMemo(() => {
    if (itemActive === 'train') {
      return null;
    }
    if (itemActive === 'plane') {
      return <BookingSearchFlight />;
    }
    return <BookingSearchHotel />;
  }, [itemActive]);

  return (
    <>
      <View style={styles.bookingScreen}>
        {itemActive !== 'train' ? (
          <ImageBackground
            source={activeImage}
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}
            resizeMode="cover">
            {renderNavigation}
            {navigationBar}
            {renderFormField}
          </ImageBackground>
        ) : (
          <View style={styles.nullBackground}>
            {renderNavigation}
            {navigationBar}
            <View style={styles.commingSoon}>
              <Image source={images.NoTasksWhite} width={10} height={10} />
              <WText
                text={translate('source:comming_soon')}
                typo="Heading2"
                color="White"
              />
            </View>
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bookingScreen: {
    display: 'flex',
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  imageBackground: {
    width: Devices.width,
    paddingTop: 77,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  imageStyle: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  navigation: {
    backgroundColor: BaseColor.White,
    marginVertical: 24,
    padding: 4,
    height: 40,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 4,
  },
  navigationItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  nullBackground: {
    width: Devices.width,
    paddingVertical: 77,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: PrimaryColor.Main,
  },
  commingSoon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 35,
  },
});

export default memo(BookingScreen);
