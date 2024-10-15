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
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
