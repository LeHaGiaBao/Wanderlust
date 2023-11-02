import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

function ListHotel() {
    return (
        <>
            <View style={styles.container1}>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    container2: {
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    destinationItem: {
        height: 170,
        width: 165,
        padding: 4,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#c9c9c94c',
    },

    image: {
        borderRadius: 4,
        width: '100%',
        height: 105,
    },

    gridLayout: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    text: {
        fontWeight: '500',
        color: '#0D0D0D',
        fontSize: 13,
    },

    subText: {
        marginTop: 1,
        fontSize: 12,
        fontWeight: '500',
        color: '#6D6D6D',
    },

    grid: {
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    iconHeart: {
        marginTop: 7,
    }
});

export default ListHotel;