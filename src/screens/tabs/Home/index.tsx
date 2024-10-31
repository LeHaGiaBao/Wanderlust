import React, {memo} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './styles';
import HomeTopNavBar from './components/Home.TopNavBar';

function HomeScreen() {
  return (
    <ScrollView style={styles.homeScreen}>
      <HomeTopNavBar />
    </ScrollView>
  );
}

export default memo(HomeScreen);
