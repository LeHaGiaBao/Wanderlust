import React from 'react';
import HomeScreen from '../pages/HomeScreen';
import BookingScreen from '../pages/BookingScreen';
import ExploreScreen from '../pages/ExploreScreen';
import RecommendScreen from '../pages/RecommendScreen';
import ProfileScreen from '../pages/ProfileScreen';
import { COLORS, FONTSIZE, SPACING } from '../themes/theme';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather'

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
            }}>
            <Tab.Screen
                name="Trang chủ"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Đặt trước"
                component={BookingScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="room" color={color} size={26} />
                    ),
                }} />
            <Tab.Screen
                name="Khám phá"
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="telescope" color={color} size={26} />
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

const styles = StyleSheet.create({
    activeTabBackground: {
        backgroundColor: COLORS.Black,
        padding: SPACING.space_18,
        borderRadius: SPACING.space_18 * 10,
    },
});

export default TabNavigation;