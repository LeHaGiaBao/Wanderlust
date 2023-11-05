import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import AuthTitle from '../../components/AuthTitle/AuthTitle';
import { useNavigation } from '@react-navigation/native';
import InputForm from '../../components/Input/InputForm';
import Social from '../../components/Social/Social';

function LoginScreen() {
    const [text, onChangeText] = useState();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        navigation.navigate('Payment');
    }

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <>
            <View style={styles.welcomeView}>
                <ScrollView>
                    <AuthTitle title="Đăng nhập" subTitle="Chào mừng bạn đến với Wanderlust!" />
                    <View style={styles.formInput}>
                        <InputForm type="email" title="Email" placeholder="Nhập email" />
                        <InputForm type="password" title="Mật khẩu" placeholder="Nhập mật khẩu" />
                        <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
                    </View>

                    <Pressable style={styles.button} onPress={handleLogin}>
                        <Text style={styles.textButton}>Đăng nhập</Text>
                    </Pressable>

                    <View style={styles.or}>
                        <View style={styles.border} />
                        <Text style={styles.orText}>Hoặc</Text>
                        <View style={styles.border} />
                    </View>

                    <Social />

                    <View style={styles.or}>
                        <Pressable onPress={handleRegister}>
                            <Text style={styles.orText}>
                                Bạn chưa có tài khoản?
                                {' '}
                                <Text style={styles.signUp}>Đăng ký ngay</Text>
                            </Text>
                        </Pressable>
                    </View>
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

    formInput: {
        marginTop: 60,
    },

    forgotPassword: {
        textAlign: 'right',
        marginRight: 16,
        color: '#155850',
        fontSize: 15,
        fontWeight: '500',
        textDecorationLine: 'underline',
    },

    button: {
        marginTop: 35,
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
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    border: {
        marginLeft: 8,
        marginRight: 8,
        width: 120,
        maxWidth: 50,
        height: 1,
        backgroundColor: '#6D6D6DCC',
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
    }
});

export default LoginScreen;