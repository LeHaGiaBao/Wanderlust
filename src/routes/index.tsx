import React, {memo, useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {Routes} from './routes';
import AppScreen from './AppScreen';
import Home from '@/screens/tabs/Home';

const Stack = createNativeStackNavigator();

function MainRoutes() {
  const onNavigationReady = useCallback(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer onReady={onNavigationReady}>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.appScreen}
          component={AppScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.tab_home}
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default memo(MainRoutes);
