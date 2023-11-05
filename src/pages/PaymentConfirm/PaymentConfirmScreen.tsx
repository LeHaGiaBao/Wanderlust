import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function PaymentConfirmScreen() {
    const navigation = useNavigation()
    const handleBack = () => {
        navigation.goBack()
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

                    <Text style={styles.title}>Phương thức thanh toán</Text>

                    <View style={styles.container} />
                </View>

                <Text style={styles.infoTitle}>Credit hoặc Debit Card</Text>

                <View style={styles.infoComponent}>
                    <View style={styles.infoComponentContainer}>
                        <AntDesign name="creditcard" size={20} color="#0D0D0D" />
                        <Text style={styles.infoTitleContent}>Thêm thẻ</Text>
                    </View>
                    <AntDesign name='rightcircleo' size={20} color="#0D0D0D" />
                </View>

                <Text style={styles.infoTitle}>Phương thức khác</Text>

                <View style={styles.infoComponent}>
                    <View style={styles.infoComponentContainer}>
                        <Image source={require('../../../assets/Payment/momo.png')} style={styles.payment} />
                        <Text style={styles.infoTitleContent}>Momo</Text>
                    </View>
                    <Ionicons name='radio-button-off-outline' size={20} color="#878787" />
                </View>

                <View style={styles.infoComponent}>
                    <View style={styles.infoComponentContainer}>
                        <Image source={require('../../../assets/Payment/zalopay.png')} style={styles.payment} />
                        <Text style={styles.infoTitleContent}>ZaloPay</Text>
                    </View>
                    <Ionicons name='radio-button-on' size={20} color="#155850" />
                </View>

                <View style={styles.infoComponent}>
                    <View style={styles.infoComponentContainer}>
                        <Image source={require('../../../assets/Payment/vnpay.png')} style={styles.payment} />
                        <Text style={styles.infoTitleContent}>VN Pay</Text>
                    </View>
                    <Ionicons name='radio-button-off-outline' size={20} color="#878787" />
                </View>

                <Text style={styles.infoTitleDiscount}>Mã giảm giá</Text>

                <View style={styles.infoComponent}>
                    <View style={styles.infoComponentContainer}>
                        <MaterialCommunityIcons name="ticket-percent-outline" size={20} color="#0D0D0D" />
                        <Text style={styles.infoTitleContent}>Chọn mã giảm giá</Text>
                    </View>
                    <AntDesign name='rightcircleo' size={20} color="#0D0D0D" />
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

                <Pressable style={styles.button}>
                    <Text style={styles.textButton}>Thanh toán</Text>
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

    infoTitle: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: '600',
        color: '#0D0D0D',
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

    infoComponent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        height: 40,
        width: '100%',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        shadowColor: '#c9c9c94c'
    },

    infoComponentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    circle: {
        height: 20,
        width: 20,
        backgroundColor: '#878787',
        borderRadius: 100,
    },

    circleCheck: {
        height: 20,
        width: 20,
        backgroundColorColor: '#878787',
        borderRadius: 100,
    },

    infoTitleContent: {
        marginTop: 2,
        marginLeft: 8,
        textAlign: 'left',
        fontSize: 14,
        fontWeight: '500',
        color: '#0D0D0D',
    },

    infoTitleDiscount: {
        marginTop: 120,
        fontSize: 16,
        fontWeight: '600',
        color: '#0D0D0D',
    },

    line: {
        marginTop: 50,
        marginBottom: 12,
        width: '100%',
        height: 2,
        backgroundColor: '#D9D9D9',
    },

    infoContent: {
        flexDirection: 'row',
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

    payment: {
        height: 23,
        width: 23,
    }
})

export default PaymentConfirmScreen;