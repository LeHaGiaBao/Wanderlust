import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

function HomeScreen() {
  return (
    <View style={styles.homeScreen}>
      {/* <ImageBackground
        source={images.WelcomeImage1}
        style={{height: Devices.height, width: Devices.width}}
        resizeMode="cover"
      /> */}
    </View>
  );
}

export default memo(HomeScreen);
