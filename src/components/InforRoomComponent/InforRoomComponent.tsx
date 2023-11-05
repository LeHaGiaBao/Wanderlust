import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function InforRoomComponent() {
    return (
        <View style={styles.infoComponent}>
            <Image source={require('../../../assets/Hotel/room.jpg')} style={styles.image} />
            <View style={styles.infoContentContainer}>
                <View style={styles.infoContent}>
                    <Text style={styles.titleInfo}>Biệt thự Rose, 1 phòng ngủ lớn</Text>
                    <View style={styles.gridWidth}>
                        <View style={styles.gridLayout}>
                            <View style={styles.gridLayout}>
                                <Ionicons name="bed" size={20} color="#053731" />
                                <Text style={styles.gridText}>1 giường lớn</Text>
                            </View>
                            <View style={styles.gridLayout}>
                                <AntDesign name="wifi" size={20} color="#053731" />
                                <Text style={styles.gridText}>Wifi</Text>
                            </View>
                        </View>
                        <View style={styles.gridLayout}>
                            <View style={styles.gridLayout}>
                                <MaterialCommunityIcons name="shower" size={20} color="#053731" />
                                <Text style={styles.gridText}>Bồn tắm</Text>
                            </View>
                            <View style={styles.gridLayout}>
                                <MaterialCommunityIcons name="swim" size={20} color="#053731" />
                                <Text style={styles.gridText}>Hồ bơi</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* 
                <View style={styles.line}></View>

                <View style={styles.gridLayout}>
                    <Ionicons name="bed" size={20} color="#053731" />
                    <Text style={styles.gridText}>1 giường lớn</Text>
                </View>
                <View style={styles.gridLayout}>
                    <Ionicons name="bed" size={20} color="#053731" />
                    <Text style={styles.gridText}>1 giường lớn</Text>
                </View>

                <View style={styles.line}></View> */}
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    infoContentContainer: {

    },

    infoComponent: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 500,
        padding: 4,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#c9c9c94c',
    },

    image: {
        height: 90,
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

    gridWidth: {
        width: '80%',
    },

    gridLayout: {
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    gridText: {
        marginLeft: 4,
        fontSize: 14,
        fontWeight: '500',
        color: '#6D6D6D',
    },

    line: {
        marginTop: 12,
        marginBottom: 12,
        width: '100%',
        height: 2,
        backgroundColor: '#D9D9D9',
    },
})

export default InforRoomComponent;