import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const data = [
    {
        id: '1',
        source: require('../../../assets/Flight/vietnamAirlines.png'),
        title: 'TP.HCM - Quy Nhơn',
        price: '1.234.000 VND',
        discount: '1.800.000 VND',
        date: '14.12.2023',
    },
    {
        id: '1',
        source: require('../../../assets/Flight/vietnamAirlines.png'),
        title: 'TP.HCM - Quy Nhơn',
        price: '1.234.000 VND',
        discount: '1.800.000 VND',
        date: '14.12.2023',
    },
    {
        id: '1',
        source: require('../../../assets/Flight/vietnamAirlines.png'),
        title: 'TP.HCM - Quy Nhơn',
        price: '1.234.000 VND',
        discount: '1.800.000 VND',
        date: '14.12.2023',
    },
];

function ListFlight() {
    return (
        <SafeAreaView style={styles.containerLayout}>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => <HotelItem source={item.source} title={item.title} price={item.price} discount={item.discount} date={item.date} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
const HotelItem = ({ source, title, price, discount, date }: any) => (
    <View style={styles.container}>
        <Image source={source} style={styles.image} />
        <View style={styles.gridLayout}>
            <View>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.date}>{date}</Text>
                <View style={styles.line} />
                <View style={styles.grid}>
                    <Text style={styles.price}>{price}</Text>
                    <Text style={styles.discount}>{discount}</Text>
                </View>
            </View>
        </View>
        <Fontisto name="heart-alt" size={20} color="#E52525" style={styles.iconHeart} />
    </View>
)

const styles = StyleSheet.create({
    containerLayout: {
        marginTop: 5,
        flex: 1,
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        width: 270,
        padding: 4,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#c9c9c94c',
        marginVertical: 8,
        marginHorizontal: 10,
    },

    image: {
        borderRadius: 4,
        width: 63,
        height: 63,
    },

    gridLayout: {
        marginLeft: 5,
        width: 160,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    text: {
        fontWeight: '500',
        color: '#0D0D0D',
        fontSize: 13,
    },

    subText: {
        marginLeft: 5,
        fontSize: 12,
        fontWeight: '500',
        color: '#6D6D6D',
    },

    date: {
        marginTop: 5,
        fontSize: 10,
        fontWeight: '500',
        color: '#6D6D6D',
    },

    grid: {
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    line: {
        marginTop: 4,
        marginBottom: 1,
        width: '100%',
        height: 1,
        backgroundColor: '#D9D9D9'
    },

    gridPrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    price: {
        color: '#E52525',
        fontSize: 12,
        fontWeight: '500',
    },

    discount: {
        marginTop: 2,
        marginLeft: 7,
        fontSize: 8,
        color: '#878787',
        textDecorationLine: 'line-through',
    },

    discountText: {
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 4,
        paddingRight: 4,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: '500',
        fontSize: 13,
    },

    iconHeart: {
        marginRight: 5,
        marginTop: 7,
    },
});

export default ListFlight;