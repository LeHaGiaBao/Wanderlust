import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

const data = [
    {
        source: require('../../../assets/Destination/vinpearl.jpg'),
        title: 'Thủy cung Vinpearl',
        subText: 'Phú Quốc, Việt...',
    },
    {
        source: require('../../../assets/Destination/halong.jpg'),
        title: 'Vịnh Hạ Long',
        subText: 'Quảng Ninh, Việt...',
    },
    {
        source: require('../../../assets/Destination/hoian.jpg'),
        title: 'Phố cổ Hội An',
        subText: 'Quảng Nam, Việt...',
    },
    {
        source: require('../../../assets/Destination/dalat.jpg'),
        title: 'Thung lũng Tình Yêu',
        subText: 'Đà Lạt, Việt Nam',
    },
];

function ListDestination() {
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

export default ListDestination;