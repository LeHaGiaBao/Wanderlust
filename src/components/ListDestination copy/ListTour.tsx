import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const data = [
    {
        source: require('../../../assets/Tour/sanmay.png'),
        title: 'Săn mây Sapa ...',
        subText: 'Lào Cai, Việt Nam',
        price: '1.425.000 VND',
        discount: '- 32%',
    },
    {
        source: require('../../../assets/Tour/sanmay.png'),
        title: 'Săn mây Sapa ...',
        subText: 'Lào Cai, Việt Nam',
        price: '1.425.000 VND',
        discount: '- 32%',
    },
    {
        source: require('../../../assets/Tour/sanmay.png'),
        title: 'Săn mây Sapa ...',
        subText: 'Lào Cai, Việt Nam',
        price: '1.425.000 VND',
        discount: '- 32%',
    },
    {
        source: require('../../../assets/Tour/sanmay.png'),
        title: 'Săn mây Sapa ...',
        subText: 'Lào Cai, Việt Nam',
        price: '1.425.000 VND',
        discount: '- 32%',
    },
];

function ListTour() {
    return (
        <>
            <View style={styles.container1}>
                <View style={styles.destinationItem}>
                    <Image source={data[0].source} style={styles.image} />
                    <View style={styles.gridLayout}>
                        <View>
                            <Text style={styles.text}>{data[0].title}</Text>
                            <View style={styles.grid}>
                                <MaterialIcons name="place" size={17} color="#155850" />
                                <Text style={styles.subText}>{data[0].subText}</Text>
                            </View>
                        </View>
                        <Fontisto name="heart-alt" size={20} color="#E52525" style={styles.iconHeart} />
                    </View>
                    <View style={styles.line} />
                    <View style={styles.gridPrice}>
                        <Text style={styles.price}>{data[0].price}</Text>
                        <View style={styles.discount}>
                            <Text style={styles.discountText}>{data[0].discount}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.destinationItem}>
                    <Image source={data[1].source} style={styles.image} />
                    <View style={styles.gridLayout}>
                        <View>
                            <Text style={styles.text}>{data[1].title}</Text>
                            <View style={styles.grid}>
                                <MaterialIcons name="place" size={17} color="#155850" />
                                <Text style={styles.subText}>{data[1].subText}</Text>
                            </View>
                        </View>
                        <Fontisto name="heart-alt" size={20} color="#E52525" style={styles.iconHeart} />
                    </View>
                    <View style={styles.line} />
                    <View style={styles.gridPrice}>
                        <Text style={styles.price}>{data[1].price}</Text>
                        <View style={styles.discount}>
                            <Text style={styles.discountText}>{data[1].discount}</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.destinationItem}>
                    <Image source={data[2].source} style={styles.image} />
                    <View style={styles.gridLayout}>
                        <View>
                            <Text style={styles.text}>{data[2].title}</Text>
                            <View style={styles.grid}>
                                <MaterialIcons name="place" size={17} color="#155850" />
                                <Text style={styles.subText}>{data[2].subText}</Text>
                            </View>
                        </View>
                        <Fontisto name="heart-alt" size={20} color="#E52525" style={styles.iconHeart} />
                    </View>
                    <View style={styles.line} />
                    <View style={styles.gridPrice}>
                        <Text style={styles.price}>{data[2].price}</Text>
                        <View style={styles.discount}>
                            <Text style={styles.discountText}>{data[2].discount}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.destinationItem}>
                    <Image source={data[3].source} style={styles.image} />
                    <View style={styles.gridLayout}>
                        <View>
                            <Text style={styles.text}>{data[3].title}</Text>
                            <View style={styles.grid}>
                                <MaterialIcons name="place" size={17} color="#155850" />
                                <Text style={styles.subText}>{data[3].subText}</Text>
                            </View>
                        </View>
                        <Fontisto name="heart-alt" size={20} color="#E52525" style={styles.iconHeart} />
                    </View>
                    <View style={styles.line} />
                    <View style={styles.gridPrice}>
                        <Text style={styles.price}>{data[3].price}</Text>
                        <View style={styles.discount}>
                            <Text style={styles.discountText}>{data[3].discount}</Text>
                        </View>
                    </View>
                </View>
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
        height: 200,
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
    }
});

export default ListTour;