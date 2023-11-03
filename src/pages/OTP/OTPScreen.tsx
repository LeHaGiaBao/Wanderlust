import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import PhoneCode from '../../components/PhoneCode/PhoneCode';

function OTPScreen() {
    const [text, onChangeText] = useState();
    const navigation = useNavigation();
    const [timeLeft, setTimeLeft] = useState(30);
    const [countdownActive, setCountdownActive] = useState(false);

    const handleBack = () => {
        navigation.navigate('Register');
    }

    const handleRegister = () => {
        navigation.navigate('CompletedProfile');
    }

    useEffect(() => {
        let countdownInterval: any;

        if (countdownActive) {
            countdownInterval = setInterval(() => {
                setTimeLeft((prevTime) => {
                    if (prevTime === 1) {
                        setCountdownActive(false); // Stop the countdown when timeLeft reaches 0
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(countdownInterval);
        }

        return () => {
            clearInterval(countdownInterval);
        };
    }, [countdownActive]);

    const startCountdown = () => {
        setTimeLeft(30);
        setCountdownActive(true);
    };

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

                    <Text style={styles.textTitle}>Nhập mã OTP</Text>
                    <Text style={styles.textSubTitle}>Nhập mã OTP được gửi về tin nhắn của bạn</Text>

                    <View style={styles.formInput}>
                        <TextInput
                            style={styles.inputCode}
                            value={text} />

                        <TextInput
                            style={styles.inputCode}
                            value={text} />

                        <TextInput
                            style={styles.inputCode}
                            value={text} />

                        <TextInput
                            style={styles.inputCode}
                            value={text} />

                        <TextInput
                            style={styles.inputCode}
                            value={text} />

                        <TextInput
                            style={styles.inputCode}
                            value={text} />
                    </View>

                    <Text style={styles.countDown}>00: {timeLeft}</Text>

                    <Pressable style={styles.button} onPress={handleRegister}>
                        <Text style={styles.textButton}>Xác nhận</Text>
                    </Pressable>

                    <Pressable onPress={startCountdown}>
                        <View style={styles.or} >
                            <Text style={styles.orText}>
                                Bạn chưa nhận được mã OTP?
                            </Text>
                            <Text style={styles.signUp}>Gửi lại mã OPT</Text>
                        </View>
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
        marginTop: 90,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 60,
        marginLeft: 16,
        marginRight: 16,
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
        marginTop: 110,
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
});

export default OTPScreen;