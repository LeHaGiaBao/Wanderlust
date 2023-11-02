import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import AuthTitle from '../../components/AuthTitle/AuthTitle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import PhoneCode from '../../components/PhoneCode/PhoneCode';

function RegisterScreen() {
    const [text, onChangeText] = useState();
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.navigate('Login');
    }

    const handleRegister = () => {
        navigation.navigate('OTP');
    }

    return (
        <>
            <View style={styles.welcomeView}>
                <AuthTitle title="Đăng ký" subTitle="Chào mừng bạn đến với Wanderlust!" />

                <View style={styles.formInput}>
                    <PhoneCode />
                    <TextInput
                        style={styles.inputPhone}
                        value={text}
                    />
                </View>

                <Pressable style={styles.button} onPress={handleRegister}>
                    <Text style={styles.textButton}>Tiếp tục</Text>
                </Pressable>

                <Pressable onPress={handleLogin}>
                    <View style={styles.or} >
                        <Text style={styles.orText}>
                            Bạn đã có tài khoản?
                            {' '}
                            <Text style={styles.signUp}>Đăng nhập</Text>
                        </Text>
                    </View>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    welcomeView: {
        flex: 1,
        backgroundColor: '#FFF',
    },

    formInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60,
        marginLeft: 16,
        marginRight: 16,
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

    button: {
        marginTop: 190,
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
        marginTop: 220,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    orText: {
        textAlign: 'center',
        color: '#6D6D6DCC',
        fontSize: 15,
        fontWeight: '500',
    },

    signUp: {
        textAlign: 'center',
        color: '#155850',
        fontSize: 15,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },
});

export default RegisterScreen;