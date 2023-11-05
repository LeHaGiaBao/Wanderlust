import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const data = [
    {
        source: require('../../../assets/Hotel/room.jpg'),
        title: 'Khu nghỉ dưỡng Vinpearl Wonderwold Phú Quốc',
        subtitle: 'Biệt thự Rose, 1 phòng ngủ lớn',
        star: '4.5'
    }
]

function InforHotelComponent() {
    return (
        <View style={styles.infoComponent}>
            <Image source={data[0].source} style={styles.image} />
            <View style={styles.infoContent}>
                <Text style={styles.titleInfo}>{data[0].title}</Text>
                <Text style={styles.subTitleInfo}>{data[0].subtitle}</Text>
                <View style={styles.grid}>
                    <AntDesign name="star" size={15} color="#F9B21A" />
                    <Text style={styles.starText}>{data[0].star}</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    infoComponent: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 90,
        width: '100%',
        padding: 4,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#c9c9c94c',
    },

    image: {
        height: 80,
        width: 125,
        borderRadius: 4,
    },

    infoContent: {
        marginLeft: 16,
        width: 245,
    },

    titleInfo: {
        fontSize: 14,
        fontWeight: '500',
        color: '#0D0D0D',
    },

    subTitleInfo: {
        marginTop: 6,
        marginBottom: 6,
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
})

export default InforHotelComponent;