import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import PhoneCode from '../../components/PhoneCode/PhoneCode';
import InputForm from '../../components/Input/InputForm';

function CompletedProfile() {
    const [text, onChangeText] = useState();
    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate('OTP');
    }

    const handleRegister = () => {
        navigation.navigate('MainScreen');
    }

    return (
        <>
            <View style={styles.welcomeView}>
                <ScrollView>
                    <Pressable onPress={handleBack}>
                        <View style={styles.back}>
                            <AntDesign name='leftcircleo' size={20} color="#155850" />
                            <Text style={styles.textBack}>Quay lại</Text>
                        </View>
                    </Pressable>

                    <Text style={styles.textTitle}>Thông tin cá nhân</Text>
                    <Text style={styles.textSubTitle}>Thêm các thông tin cá nhân cần thiết của bạn</Text>

                    <View style={styles.formInput}>
                        <InputForm type="Họ và tên" title="Email" placeholder="Nguyễn Văn A" />
                        <InputForm type="email" title="Email" placeholder="nguyenvana@gmail.com" />
                        <InputForm type="email" title="Ngày sinh" placeholder="15/04/20002" />
                        <InputForm type="password" title="Mật khẩu" placeholder="Nhập mật khẩu" />
                        <InputForm type="password" title="Nhập lại mật khẩu" placeholder="Nhập mật khẩu" />
                    </View>

                    <Pressable>
                        <View style={styles.or} >
                            <Text>
                                <Text style={styles.orText}>
                                    Bằng cách chọn
                                    {' '}
                                    <Text style={styles.colorGreen}>
                                        Đồng ý và tiếp tục
                                    </Text>, tôi đồng ý
                                    {' '}
                                </Text>
                                <View></View>
                                <Text style={styles.signUp}>Điều khoản và dịch vụ</Text>
                                {' '}
                                của
                                {' '}
                                <Text style={styles.colorGreen}>
                                    Wanderlust.
                                </Text>
                            </Text>
                        </View>
                    </Pressable>

                    <Pressable style={styles.button} onPress={handleRegister}>
                        <Text style={styles.textButton}>Đồng ý và tiếp tục</Text>
                    </Pressable>
                </ScrollView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    welcomeView: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    back: {
        flexDirection: 'row',
        marginTop: 70,
        marginLeft: 16,
    },

    textBack: {
        marginTop: 2,
        marginLeft: 6,
        color: '#155850',
        fontWeight: '500',
        fontSize: 15,
    },

    textTitle: {
        textAlign: 'center',
        marginTop: 30,
        color: '#155850',
        fontSize: 35,
        fontWeight: '700',
    },

    textSubTitle: {
        textAlign: 'center',
        marginTop: 15,
        color: '#155850',
        fontSize: 17,
        fontWeight: '500',
    },

    formInput: {
        marginTop: 20,
    },

    inputCode: {
        width: 45,
        height: 45,
        borderWidth: 2,
        padding: 10,
        borderColor: '#878787',
        borderRadius: 8,
        color: '#000',
    },

    countDown: {
        marginTop: 30,
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
    },

    button: {
        marginTop: 30,
        marginLeft: 16,
        marginRight: 16,
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

    or: {
        marginTop: 20,
        alignItems: 'center',
    },

    orText: {
        textAlign: 'center',
        color: '#6D6D6DCC',
        fontSize: 15,
        fontWeight: '500',
    },

    signUp: {
        marginTop: 5,
        textAlign: 'center',
        color: '#155850',
        fontSize: 15,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },

    colorGreen: {
        textAlign: 'center',
        color: '#155850',
        fontSize: 15,
        fontWeight: '500',
    }
});

export default CompletedProfile;