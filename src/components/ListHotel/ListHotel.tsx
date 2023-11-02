import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'

const data = [
    {
        id: '1',
        source: require('../../../assets/Hotel/hotel.jpg'),
        title: 'Khách sạn Mường Thanh',
        subText: 'Khánh Hoà, Việt Nam',
        star: '4.5',
    },
    {
        id: '2',
        source: require('../../../assets/Hotel/hotel.jpg'),
        title: 'Khách sạn Mường Thanh',
        subText: 'Khánh Hoà, Việt Nam',
        star: '4.5',
    },
    {
        id: '3',
        source: require('../../../assets/Hotel/hotel.jpg'),
        title: 'Khách sạn Mường Thanh',
        subText: 'Khánh Hoà, Việt Nam',
        star: '4.5',
    },
];

function ListHotel() {
    return (
        <SafeAreaView style={styles.containerLayout}>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => <HotelItem source={item.source} title={item.title} subText={item.subText} star={item.star} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}
const HotelItem = ({ source, title, subText, star }: any) => (
    <View style={styles.container}>
        <Image source={source} style={styles.image} />
        <View style={styles.gridLayout}>
            <View>
                <Text style={styles.text}>{title}</Text>
                <View style={styles.grid}>
                    <AntDesign name="star" size={15} color="#F9B21A" />
                    <Text style={styles.starText}>{star}</Text>
                </View>
                <View style={styles.grid}>
                    <MaterialIcons name="place" size={15} color="#155850" />
                    <Text style={styles.subText}>{subText}</Text>
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

    starText: {
        marginLeft: 5,
        fontSize: 12,
        fontWeight: '500',
        color: '#0D0D0D',
    },

    grid: {
        marginTop: 6,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    line: {
        marginTop: 8,
        marginBottom: 8,
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
        fontSize: 14,
        fontWeight: '500',
    },

    discount: {
        backgroundColor: '#E52525',
        height: 19,
        width: 50,
        borderRadius: 50,
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
        marginTop: 20,
    },
});

export default ListHotel;