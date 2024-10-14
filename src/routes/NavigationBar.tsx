/* eslint-disable react/no-unstable-nested-components */
import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BaseColor, FontFamily, FontSize, PrimaryColor} from '@/constants';
import translate from '@/translations/i18n';
import HomeScreen from '@/screens/tabs/Home';
import BookingScreen from '@/screens/tabs/Booking';
import ExploreScreen from '@/screens/tabs/Explore';
import RecommendScreen from '@/screens/tabs/Recommend';
import AccountScreen from '@/screens/tabs/Account';
import {
  Home2,
  Stickynote,
  SearchNormal1,
  LikeShapes,
  ProfileCircle,
} from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

function NavigationBar() {
  return (
    <>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            height: 90,
          },
          tabBarActiveTintColor: PrimaryColor.Main,
          tabBarInactiveTintColor: BaseColor.DarkGray,
          tabBarLabelStyle: {
            fontFamily: FontFamily.FontMedium,
            fontSize: FontSize.FontSize10,
            marginTop: -8,
          },
        })}>
        <Tab.Screen
          name={translate('navigation:tab_home')}
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Home2
                color={`${focused ? PrimaryColor.Main : BaseColor.DarkGray}`}
                variant={`${focused ? 'Bold' : 'Linear'}`}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name={translate('navigation:tab_booking')}
          component={BookingScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Stickynote
                color={`${focused ? PrimaryColor.Main : BaseColor.DarkGray}`}
                variant={`${focused ? 'Bold' : 'Linear'}`}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name={translate('navigation:tab_explore')}
          component={ExploreScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <SearchNormal1
                color={`${focused ? PrimaryColor.Main : BaseColor.DarkGray}`}
                variant={`${focused ? 'Bold' : 'Linear'}`}
                size={24}
              />
            ),
          }}
        />

        <Tab.Screen
          name={translate('navigation:tab_recommend')}
          component={RecommendScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <LikeShapes
                color={`${focused ? PrimaryColor.Main : BaseColor.DarkGray}`}
                variant={`${focused ? 'Bold' : 'Linear'}`}
                size={24}
              />
            ),
          }}
        />
        <Tab.Screen
          name={translate('navigation:tab_account')}
          component={AccountScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <ProfileCircle
                color={`${focused ? PrimaryColor.Main : BaseColor.DarkGray}`}
                variant={`${focused ? 'Bold' : 'Linear'}`}
                size={24}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default memo(NavigationBar);
