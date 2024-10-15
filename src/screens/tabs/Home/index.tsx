import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

function HomeScreen() {
  return (
    <View style={styles.homeScreen}>
      {/* <ImageBackground
        source={images.WelcomeImage1}
        resizeMode="cover"
        style={styles.container}>
        <View />
      </ImageBackground> */}
    </View>
  );
}

export default memo(HomeScreen);
