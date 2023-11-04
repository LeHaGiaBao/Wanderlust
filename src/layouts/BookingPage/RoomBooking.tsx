import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

function RoomBooking() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainerTop}>
                <Ionicons name="location-outline" size={20} color="#155850" />
                <TextInput
                    style={styles.inputText}
                    placeholderTextColor="#155850"
                    placeholder='Tìm khách sạn, homstay,...'
                />
            </View>
            <View style={styles.inputContainer}>
                <Ionicons name="calendar-outline" size={20} color="#155850" />
                <TextInput
                    style={styles.inputText}
                    placeholderTextColor="#155850"
                    placeholder='07 tháng 11 - 10 tháng 11'
                />
            </View>
            <View style={styles.inputContainer}>
                <Octicons name="people" size={20} color="#155850" />
                <TextInput
                    style={styles.inputText}
                    placeholderTextColor="#155850"
                    placeholder='2 người lớn - 1 phòng'
                />
                <AntDesign name="downcircleo" size={17} color="#155850" />
            </View>

            <Pressable style={styles.button}>
                <Feather name="search" size={17} color="#0D0D0D" />
                <Text style={styles.textButton}>Tìm kiếm</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#155850',
    },

    inputContainerTop: {
        backgroundColor: '#F7F7F7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 14,
        marginTop: 10,
        height: 45,
        borderWidth: 1,
        borderColor: '#878787',
        color: '#000',
    },

    inputContainer: {
        backgroundColor: '#F7F7F7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 14,
        marginTop: 8,
        marginBottom: 8,
        height: 45,
        borderWidth: 1,
        borderColor: '#878787',
        color: '#000',
    },

    inputText: {
        flex: 1,
        paddingVertical: 10,
        paddingLeft: 8,
        fontSize: 14,
        color: '#000',
    },

    button: {
        marginTop: 5,
        marginBottom: 50,
        backgroundColor: '#F9B21A',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 25,
    },

    textButton: {
        marginLeft: 8,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#0D0D0D',
    },
})

export default RoomBooking;