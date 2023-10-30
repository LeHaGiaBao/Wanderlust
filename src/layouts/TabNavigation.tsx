import React from 'react';
import HomeScreen from '../pages/Home/HomeScreen';
import BookingScreen from '../pages/Booking/BookingScreen';
import ExploreScreen from '../pages/Explore/ExploreScreen';
import RecommendScreen from '../pages/Recommend/RecommendScreen';
import ProfileScreen from '../pages/Profile/ProfileScreen';
import { COLORS, SPACING } from '../themes/theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLORS.White,
                    borderTopWidth: 0,
                    height: SPACING.space_10 * 10,
                },
                tabBarActiveTintColor: '#155850',
                tabBarInactiveTintColor: '#6D6D6D',
            }}>
            <Tab.Screen
                name="Trang chủ"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Octicons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Đặt trước"
                component={BookingScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="calendar" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen
                name="Khám phá"
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="compass" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen
                name="Đề xuất"
                component={RecommendScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="recommend" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen
                name="Tài khoản"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default TabNavigation;