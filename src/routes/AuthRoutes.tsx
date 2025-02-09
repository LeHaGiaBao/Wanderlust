import React, {memo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from './routes';
import WelcomeScreen from '@/screens/auth/WelcomeScreen';
import SignIn from '@/screens/auth/SignIn';
import SignUp from '@/screens/auth/SignUp';
import OTP from '@/screens/auth/OTP';
import EnterProfile from '@/screens/auth/EnterProfile';
import TermAndCondition from '@/screens/main/AboutUs/TermAndCondition';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.welcomeScreen}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.sign_in}
        component={SignIn}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
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
      <Stack.Screen
        name={Routes.term_and_condition}
        component={TermAndCondition}
        options={{headerShown: false, animation: 'slide_from_bottom'}}
      />
    </Stack.Navigator>
  );
}

export default memo(AuthRoutes);
