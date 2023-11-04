import React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes/theme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RoomBooking from '../../layouts/BookingPage/RoomBooking';
import FlightBooking from '../../layouts/BookingPage/FlightBooking';
import CarBooking from '../../layouts/BookingPage/CarBooking';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createMaterialTopTabNavigator();

function TopNavigationTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: COLORS.White,
                    borderTopWidth: 0,
                    borderRadius: 20,
                    height: 50,
                },
                tabBarActiveTintColor: '#155850',
                tabBarInactiveTintColor: '#6D6D6D',
            }}
        >
            <Tab.Screen
                name='Đặt phòng'
                component={RoomBooking}
            // options={{
            //     tabBarIcon: ({ color }) => (
            //         <FontAwesome5 name="hotel" color={color} size={20} />
            //     )
            // }}
            />
            <Tab.Screen
                name='Tìm chuyến bay'
                component={FlightBooking}
            // options={{
            //     tabBarIcon: ({ color }) => (
            //         <MaterialIcons name="flight" color={color} size={20} />
            //     )
            // }}
            />
            <Tab.Screen
                name='Đặt vé xe'
                component={CarBooking}
            // options={{
            //     tabBarIcon: ({ color }) => (
            //         <FontAwesome5 name="car" color={color} size={20} />
            //     )
            // }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
})

export default TopNavigationTab;