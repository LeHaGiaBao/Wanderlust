import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {enableFreeze} from 'react-native-screens';
import MainRoutes from '@/routes';

enableFreeze(true);

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.appContainer}>
      <MainRoutes />
      {/* <ImageBackground
        source={images.WelcomeImage1}
        resizeMode="cover"
        style={styles.container}>
        <View />
      </ImageBackground> */}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 200,
  },
  // container: {
  //   width: '100%',
  //   height: '100%',
  // },
});

export default App;
