import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const data = [
    {
        enter: '2:00 PM, Thứ 3, 07/11',
        exit: '12:00 PM, CN, 08/11',
        room: '1 phòng',
        people: '2 người',
        child: '1 trẻ',
        pet: '1 bé',
    }
]

function InforCustomerComponent() {
    return (
        <View style={styles.infoComponent}>
            <View style={styles.timeInfo}>
                <View style={styles.infoContent}>
                    <Ionicons name='enter-outline' size={20} color="#155850" />
                    <Text style={styles.titleInfo}>{data[0].enter}</Text>
                </View>
                <View style={styles.infoContent}>
                    <Ionicons name='exit-outline' size={20} color="#155850" />
                    <Text style={styles.titleInfo}>{data[0].enter}</Text>
                </View>
            </View>
            <View style={styles.customerInfo}>
                <View style={styles.infoContent}>
                    <FontAwesome name='building-o' size={20} color="#155850" />
                    <Text style={styles.titleInfo}>{data[0].room}</Text>
                </View>
                <View style={styles.infoContent}>
                    <Ionicons name='person' size={20} color="#155850" />
                    <Text style={styles.titleInfo}>{data[0].people}</Text>
                </View>
                <View style={styles.infoContent}>
                    <Ionicons name='person' size={20} color="#155850" />
                    <Text style={styles.titleInfo}>{data[0].child}</Text>
                </View>
                <View style={styles.infoContent}>
                    <MaterialIcons name='pets' size={20} color="#155850" />
                    <Text style={styles.titleInfo}>{data[0].pet}</Text>
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
        height: 90,
        width: '100%',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#c9c9c94c',
    },

    timeInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    infoContent: {
        flexDirection: 'row',
    },

    titleInfo: {
        marginTop: 3,
        marginLeft: 8,
        fontSize: 12,
        fontWeight: '500',
        color: '#0D0D0D',
    },

    customerInfo: {
        marginTop: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default InforCustomerComponent;