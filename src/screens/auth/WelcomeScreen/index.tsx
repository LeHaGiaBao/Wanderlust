/* eslint-disable react/react-in-jsx-scope */
import {memo, useCallback, useMemo, useRef} from 'react';
import {styles} from './styles';
import {ImageBackground, View} from 'react-native';
import {Devices} from '@/constants';
import images from '@/assets/images';
import translate from '@/translations/i18n';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {WButton, WText} from '@/components/UIKit';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

const welcomeData = [
  {
    id: 0,
    title: translate('navigation:wanderlust'),
    des: translate('navigation:wanderlust_des'),
    button: translate('navigation:next'),
    image: images.WelcomeImage1,
  },
  {
    id: 1,
    title: translate('navigation:booking'),
    des: translate('navigation:booking_des'),
    button: translate('navigation:next'),
    image: images.WelcomeImage2,
  },
  {
    id: 2,
    title: translate('navigation:vivu'),
    des: translate('navigation:vivu_des'),
    button: translate('navigation:start'),
    image: images.WelcomeImage3,
  },
];

function WelcomeScreen() {
  const nav = useWanderlustNavigation();
  const ref = useRef<ICarouselInstance>(null);

  const PaginationItem = useMemo(() => {
    return ({total, active}: {total: number; active: number}) => (
      <View style={styles.paginationContainer}>
        {Array.from({length: total}).map((_, index) => (
          <View
            key={index}
            style={[
              index === active
                ? styles.paginationActive
                : styles.paginationInActive,
            ]}
          />
        ))}
      </View>
    );
  }, []);

  const goNextPage = useCallback(
    (index: any) => {
      ref.current?.next();

      if (index === 2) {
        nav.navigate(Routes.appScreen);
      }
    },
    [nav],
  );

  return (
    <View>
      <Carousel
        ref={ref}
        loop={false}
        width={Devices.width}
        height={Devices.height}
        data={welcomeData}
        renderItem={({item, index}) => (
          <ImageBackground
            source={item.image}
            style={styles.imageBackground}
            resizeMode="cover">
            <View style={styles.textContainer}>
              <WText text={item.title} typo="Title" color="Main" />
              <WText text={item.des} typo="Description" color="Main" />
            </View>
            <View style={styles.buttonContainer}>
              <PaginationItem total={welcomeData.length} active={index} />
              <WButton
                text={item.button}
                typo="Button1"
                color="White"
                backgroundColor="Main"
                onPress={() => goNextPage(index)}
              />
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
}

export default memo(WelcomeScreen);
