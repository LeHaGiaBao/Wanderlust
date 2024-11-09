import React, {memo, useCallback} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {Routes} from './routes';
import WelcomeScreen from '@/screens/auth/WelcomeScreen';
import AppScreen from './AppScreen';
import Home from '@/screens/tabs/Home';
import Booking from '@/screens/tabs/Booking';
import Explore from '@/screens/tabs/Explore';
import Recommend from '@/screens/tabs/Recommend';
import Account from '@/screens/tabs/Account';
import Notification from '@/screens/main/Notification';
import AuthRoutes from './AuthRoutes';

const Stack = createNativeStackNavigator();

function MainRoutes() {
  const onNavigationReady = useCallback(() => {
    SplashScreen.hide();
  }, []);

  if (false) {
    return <AuthRoutes />;
  }

  return (
    <NavigationContainer onReady={onNavigationReady}>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.welcomeScreen}
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
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
        <Stack.Screen
          name={Routes.tab_booking}
          component={Booking}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.tab_explore}
          component={Explore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.tab_recommend}
          component={Recommend}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.tab_account}
          component={Account}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.notification}
          component={Notification}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default memo(MainRoutes);
