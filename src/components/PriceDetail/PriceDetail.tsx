import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const data = [
    {
        roomInfo: '1 phòng x 5 đêm',
        roomPrice: '7.999.000 VND',
        taxInfo: 'Thuế và phí (8%)',
        taxPrice: '639.920 VND',
    }
]

function PriceDetail() {
    return (
        <View style={styles.infoComponent}>
            <View style={styles.roomInfo}>
                <View style={styles.infoContent}>
                    <Text style={styles.titleInfo}>{data[0].roomInfo}</Text>
                </View>
                <View style={styles.infoContent}>
                    <Text style={styles.titleInfo}>{data[0].roomPrice}</Text>
                </View>
            </View>
            <View style={styles.taxInfo}>
                <View style={styles.infoContent}>
                    <Text style={styles.titleInfo}>{data[0].taxInfo}</Text>
                </View>
                <View style={styles.infoContent}>
                    <Text style={styles.titleInfo}>{data[0].taxPrice}</Text>
                </View>
            </View>

            <View style={styles.line}></View>

            <View style={styles.totalInfo}>
                <View style={styles.infoContent}>
                    <Text style={styles.totalTitle}>Tổng thanh toán</Text>
                </View>
                <View style={styles.infoContent}>
                    <Text style={styles.totalPrice}>8.638.920 VND</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    infoComponent: {
        marginTop: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },

    roomInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    infoContent: {
        flexDirection: 'row',
    },

    titleInfo: {
        fontSize: 14,
        fontWeight: '500',
        color: '#6D6D6D',
    },

    taxInfo: {
        marginTop: 8,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    line: {
        marginTop: 12,
        marginBottom: 12,
        width: '100%',
        height: 2,
        backgroundColor: '#D9D9D9',
    },

    totalInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    totalTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#0D0D0D',
    },

    totalPrice: {
        fontSize: 20,
        fontWeight: '600',
        color: '#E52525',
    }
})

export default PriceDetail;