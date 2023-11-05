import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import InforHotelComponent from '../../components/InforHotelComponent/InforHotelComponent';
import InforCustomerComponent from '../../components/InforCustomerComponent/InforCustomerComponent';
import PhoneCode from '../../components/PhoneCode/PhoneCode';
import PriceDetail from '../../components/PriceDetail/PriceDetail';

function PaymentScreen() {
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack()
    }

    const handleConfirm = () => {
        navigation.navigate('PaymentConfirm')
    }

    return (
        <ScrollView>
            <View style={styles.componentContainer}>
                <View style={styles.header}>
                    <Pressable onPress={handleBack}>
                        <View style={styles.back}>
                            <AntDesign name='leftcircleo' size={20} color="#155850" style={styles.iconBack} />
                        </View>
                    </Pressable>

                    <Text style={styles.title}>Xác nhận thông tin</Text>

                    <View style={styles.container} />
                </View>

                <Text style={styles.infoTitle}>Thông tin đặt phòng</Text>

                <InforHotelComponent />

                <InforCustomerComponent />

                <Text style={styles.infoTitle}>Thông tin khách check-in</Text>

                <Text style={styles.textForm}>Họ tên</Text >
                <TextInput
                    placeholder="Tên của bạn"
                    style={styles.input}
                    value={text}
                />

                <View style={styles.formInput}>
                    <PhoneCode />
                    <TextInput
                        style={styles.inputPhone}
                        value={text}
                    />
                </View>

                <Text style={styles.infoTitleDetail}>Chi tiết giá</Text>

                <PriceDetail />

                <Pressable style={styles.button} onPress={handleConfirm}>
                    <Text style={styles.textButton}>Tiếp tục</Text>
                </Pressable>
            </View>
        </ScrollView>
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

    textForm: {
        marginTop: 8,
        textAlign: 'left',
        color: '#6D6D6D',
        fontSize: 10,
        fontWeight: '500',
    },

    input: {
        marginTop: 10,
        marginBottom: 20,
        height: 45,
        borderWidth: 2,
        padding: 10,
        borderColor: '#878787',
        borderRadius: 8,
        color: '#000',
    },

    formInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputCode: {
        width: 100,
        height: 45,
        borderWidth: 2,
        padding: 10,
        borderColor: '#878787',
        borderRadius: 8,
        color: '#000',
    },

    inputPhone: {
        width: 240,
        height: 45,
        borderWidth: 2,
        padding: 10,
        borderColor: '#878787',
        borderRadius: 8,
        color: '#000',
    },

    infoTitleDetail: {
        marginTop: 50,
        fontSize: 16,
        fontWeight: '600',
        color: '#0D0D0D',
    },

    button: {
        marginTop: 50,
        backgroundColor: '#155850',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
    },

    textButton: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export default PaymentScreen;