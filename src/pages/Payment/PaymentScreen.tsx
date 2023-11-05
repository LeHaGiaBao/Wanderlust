import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import InforHotelComponent from '../../components/InforHotelComponent/InforHotelComponent';

const data = [
    {
        source: require('../../../assets/Hotel/room.jpg'),
        title: 'Khu nghỉ dưỡng Vinpearl Wonderwold Phú Quốc',
        subtitle: 'Biệt thự Rose, 1 phòng ngủ lớn',
        star: '4.5'
    }
]

function PaymentScreen() {
    const [text, onChangeText] = useState();
    const navigation = useNavigation();

    return (
        <View style={styles.componentContainer}>
            <View style={styles.header}>
                <Pressable>
                    <View style={styles.back}>
                        <AntDesign name='leftcircleo' size={20} color="#155850" style={styles.iconBack} />
                    </View>
                </Pressable>

                <Text style={styles.title}>Xác nhận thông tin</Text>

                <View style={styles.container} />
            </View>

            <Text style={styles.infoTitle}>Thông tin đặt phòng</Text>

            <InforHotelComponent />
        </View>
    );
}

const styles = StyleSheet.create({
    componentContainer: {
        marginRight: 16,
        marginLeft: 16,
    },

    header: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    back: {
        backgroundColor: '#D7F3F0',
        height: 32,
        width: 32,
        borderRadius: 100,
    },

    iconBack: {
        padding: 6,
    },

    title: {
        marginTop: 6,
        fontSize: 16,
        fontWeight: '600',
        color: '#0D0D0D',
    },

    container: {
        height: 32,
        width: 32,
    },

    infoTitle: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '600',
        color: '#0D0D0D',
    },
})

export default PaymentScreen;