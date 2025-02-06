import React, {memo, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AuthRoutes from './AuthRoutes';
import RootNavigator from './RootNavigator';
import {useAuth} from '@/services/provider/auth/AuthProvider';

function MainRoutes() {
  const onNavigationReady = useCallback(() => {
    SplashScreen.hide();
  }, []);

  const {user} = useAuth();

  //console.log('user', user);

  if (user === null) {
    return <AuthRoutes />;
  }

  return (
    <NavigationContainer onReady={onNavigationReady}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default memo(MainRoutes);
