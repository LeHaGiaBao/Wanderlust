import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import AuthTitle from '../../components/AuthTitle/AuthTitle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import InputForm from '../../components/Input/InputForm';

function LoginScreen() {
    const [text, onChangeText] = useState();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigation = useNavigation();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        navigation.navigate('MainScreen');
    }

    return (
        <>
            <View style={styles.welcomeView}>
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

                <View style={styles.social}>
                    <View style={styles.socialNetwork}>
                        <AntDesign name="google" size={26} color="#155850" style={styles.google} />
                    </View>
                    <View style={styles.socialNetwork}>
                        <FontAwesome name="facebook" size={26} color="#155850" style={styles.facebook} />
                    </View>
                </View>

                <View style={styles.or}>
                    <Text style={styles.orText}>
                        Bạn chưa có tài khoản?
                        {' '}
                        <Text style={styles.signUp}>Đăng ký ngay</Text>
                    </Text>
                </View>
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

    social: {
        marginTop: 50,
        marginLeft: 130,
        marginRight: 130,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    socialNetwork: {
        width: 50,
        height: 50,
        backgroundColor: '#D7F3F0',
        borderRadius: '100%',
    },

    google: {
        paddingLeft: 12,
        paddingTop: 12,
    },

    facebook: {
        paddingLeft: 16,
        paddingTop: 12,
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