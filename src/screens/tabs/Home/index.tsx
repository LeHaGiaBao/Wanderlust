import React, {memo} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import translate from '@/translations/i18n';
import {BaseColor, Devices} from '@/constants';
import HomeTopNavBar from './components/Home.TopNavBar';
import HomeNavigation from './components/Home.Navigation';
import HomeDestination from './components/Home.Destination';
import HomeHotel from './components/Home.Hotel';

function HomeScreen() {
  return (
    <ScrollView style={styles.homeScreen}>
      <HomeTopNavBar />
      <HomeNavigation
        title={translate('source:destination')}
        onPress={() => {}}
      />
      <HomeDestination />
      <HomeNavigation title={translate('source:hotel')} onPress={() => {}} />
      <HomeHotel />
      <HomeNavigation
        title={translate('source:cheap_flight')}
        onPress={() => {}}
      />
      {/* <HomeNavigation
        title={translate('source:good_tour')}
        onPress={() => {}}
      /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    paddingTop: 77,
    paddingHorizontal: 16,
    display: 'flex',
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
});

export default memo(HomeScreen);
