import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeContentTitle({ title }: any) {
    return (
        <View style={styles.destinationGrid}>
            <Text style={styles.destination}>{title}</Text>
            <Text style={styles.seeAll}>Xem tất cả</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    destinationGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    destination: {
        fontSize: 16,
        marginTop: 24,
        paddingLeft: 5,
    },

    seeAll: {
        color: '#20A696',
        fontSize: 12,
        marginTop: 26,
        paddingLeft: 5,
        fontWeight: '500',
    },
});

export default HomeContentTitle;