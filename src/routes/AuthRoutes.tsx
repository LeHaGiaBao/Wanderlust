import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './routes';
import SignIn from '@/screens/auth/SignIn';
import SignUp from '@/screens/auth/SignUp';
import OTP from '@/screens/auth/OTP';
import EnterProfile from '@/screens/auth/EnterProfile';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.sign_in}
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.sign_up}
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.otp}
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={Routes.enter_profile}
          component={EnterProfile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default memo(AuthRoutes);
