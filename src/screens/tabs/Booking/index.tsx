/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useMemo, useState} from 'react';
import {
  FlatList,
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
import {WFlightTicket, WIcon, WText} from '@/components/UIKit';
import {Bus} from 'iconsax-react-native';
import BookingSearchHotel from './components/Booking.SearchHotel';
import BookingSearchFlight from './components/Booking.SearchFlight';
import {CardItem} from '@/components/containers';

const HOTEL_DATA = [
  {
    id: 1,
    images: [
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
    ],
    title: 'Săn mây Sapa ngắm Bình Minh',
    destination: 'Lào Cai, Việt Nam',
    price: '1.425.000VNĐ',
    discount: '-32%',
  },
  {
    id: 2,
    images: [
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
    ],
    title: 'Trải nghiệm du thuyền Hạ Long',
    destination: 'Hạ Long, Việt Nam',
    price: '3.425.000VNĐ',
    discount: '-24%',
  },
  {
    id: 3,
    images: [
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
    ],
    title: 'Tour Tràng An, Ninh Bình',
    destination: 'Ninh Bình, Việt Nam',
    price: '2.100.000VNĐ',
    discount: '-18%',
  },
  {
    id: 4,
    images: [
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
    ],
    title: 'Tour Bà Nà Hills',
    destination: 'Đà Nẵng, Việt Nam',
    price: '725.000VNĐ',
    discount: '-47%',
  },
];

const FLIGHT_DATA = [
  {
    id: 1,
    airlineLogo:
      'https://e-magazine.asiamedia.vn/wp-content/uploads/2024/01/tct-hang-khong-viet-nam-600.png',
    airlineName: 'Vietnam Airlines',
    departureTime: '10.30',
    departureCity: 'SGN',
    arrivalTime: '11:30',
    arrivalCity: 'PQC',
    flightTime: '01h00',
    flightType: 'Bay thẳng',
    ticketType: 'Economy Class',
    numOfPassengers: '1',
    ticketPrice: '1.029.000VNĐ',
  },
  {
    id: 2,
    airlineLogo:
      'https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg',
    airlineName: 'Vietjet Air',
    departureTime: '10.30',
    departureCity: 'SGN',
    arrivalTime: '11:30',
    arrivalCity: 'PQC',
    flightTime: '01h00',
    flightType: 'Bay thẳng',
    ticketType: 'Economy Class',
    numOfPassengers: '1',
    ticketPrice: '1.029.000VNĐ',
  },
  {
    id: 3,
    airlineLogo:
      'https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Bamboo-Airways-V.png',
    airlineName: 'Bamboo Airways',
    departureTime: '10.30',
    departureCity: 'SGN',
    arrivalTime: '11:30',
    arrivalCity: 'PQC',
    flightTime: '01h00',
    flightType: 'Bay thẳng',
    ticketType: 'Economy Class',
    numOfPassengers: '1',
    ticketPrice: '1.029.000VNĐ',
  },
  {
    id: 4,
    airlineLogo:
      'https://phongvevietmy.com/wp-content/uploads/2020/07/logo-Pacific-Airlines.jpg',
    airlineName: 'Pacific Airlines',
    departureTime: '10.30',
    departureCity: 'SGN',
    arrivalTime: '11:30',
    arrivalCity: 'PQC',
    flightTime: '01h00',
    flightType: 'Bay thẳng',
    ticketType: 'Economy Class',
    numOfPassengers: '1',
    ticketPrice: '1.029.000VNĐ',
  },
];

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

  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  const DATA = useMemo(() => {
    if (itemActive === 'hotel') {
      return [
        ...HOTEL_DATA,
        ...HOTEL_DATA,
        ...HOTEL_DATA,
        ...HOTEL_DATA,
        ...HOTEL_DATA,
      ].map((item, index) => ({
        ...item,
        id: index + 1,
      }));
    } else if (itemActive === 'plane') {
      return [
        ...FLIGHT_DATA,
        ...FLIGHT_DATA,
        ...FLIGHT_DATA,
        ...FLIGHT_DATA,
        ...FLIGHT_DATA,
      ].map((item, index) => ({
        ...item,
        id: index + 1,
      }));
    }
    return null;
  }, [itemActive]);

  const renderItem = useCallback(
    ({item}: any) => {
      const {
        images,
        title,
        destination,
        price,
        discount,
        airlineLogo,
        airlineName,
        departureTime,
        departureCity,
        arrivalTime,
        arrivalCity,
        flightTime,
        flightType,
        ticketType,
        ticketPrice,
        numOfPassengers,
      } = item;

      if (itemActive === 'hotel') {
        return (
          <View style={styles.itemContainer}>
            <CardItem
              images={images}
              title={title}
              destination={destination}
              price={price}
              discount={discount}
            />
          </View>
        );
      } else if (itemActive === 'plane') {
        return (
          <View style={styles.itemFlightContainer}>
            <WFlightTicket
              airlineLogo={airlineLogo}
              airlineName={airlineName}
              departureTime={departureTime}
              departureCity={departureCity}
              arrivalTime={arrivalTime}
              arrivalCity={arrivalCity}
              flightTime={flightTime}
              flightType={flightType}
              ticketType={ticketType}
              numOfPassengers={numOfPassengers}
              ticketPrice={ticketPrice}
            />
          </View>
        );
      }
      return null;
    },
    [itemActive],
  );

  const renderSeparator = useCallback(() => {
    return <View style={{height: 12}} />;
  }, []);

  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

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
      <FlatList
        style={styles.bookingScreen}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={renderSeparator}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={
          <>
            <View>
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
                    <Image
                      source={images.NoTasksWhite}
                      width={10}
                      height={10}
                    />
                    <WText
                      text={translate('source:comming_soon')}
                      typo="Heading2"
                      color="White"
                    />
                  </View>
                </View>
              )}
              <View style={styles.headingTitle}>
                <WText
                  text={translate('source:recommend')}
                  typo="Heading1"
                  color="Black"
                />
              </View>
            </View>
          </>
        }
      />
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
  footer: {
    width: '100%',
    height: 100,
  },
  itemContainer: {
    paddingHorizontal: 16,
  },
  itemFlightContainer: {
    paddingHorizontal: 8,
  },
  headingTitle: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
});

export default memo(BookingScreen);
