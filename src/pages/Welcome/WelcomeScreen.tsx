import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import OnBoarding from '../OnBoarding/OnBoarding';

const images = [
    {
        source: require('../../../assets/Welcome/wanderlust.png'),
        title: 'Wanderlust',
        subText: 'Khám phá những vùng đất mới!',
    },
    {
        source: require('../../../assets/Welcome/booking.png'),
        title: 'Booking',
        subText: 'Dễ dàng tìm kiếm và đặt phòng',
    },
    {
        source: require('../../../assets/Welcome/vivu.png'),
        title: 'Vi vu',
        subText: 'Tìm kiếm chuyến bay dễ dàng, nhanh chóng',
    },
];

function WelcomeScreen() {
    const [showInitialView, setShowInitialView] = useState(true);
    const [step, setStep] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInitialView(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const onNextStep = () => {
        if (step < images.length - 1) {
            setStep(step + 1);
        }
    };

    if (showInitialView) {
        return (
            <View style={styles.container}>
                <OnBoarding />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={images[step].source}
                    resizeMode="cover"
                    style={styles.image}
                >
                    <Text style={styles.text}>{images[step].title}</Text>
                    <Text style={styles.subText}>{images[step].subText}</Text>
                    {step < images.length - 1 ? (
                        <Pressable style={styles.button} onPress={onNextStep}>
                            <Text style={styles.textButton}>Tiếp theo</Text>
                        </Pressable>
                    ) : (
                        <Pressable style={styles.buttonStart} onPress={() => alert('You reached the end.')}>
                            <Text style={styles.textButton}>Bắt đầu</Text>
                        </Pressable>
                    )}
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        flex: 1,
    },

    text: {
        marginTop: 72,
        marginLeft: 16,
        color: '#155850',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'left',
    },


    subText: {
        marginTop: 5,
        marginLeft: 16,
        color: '#155850',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
    },

    button: {
        marginTop: 600,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#155850',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 50,
        elevation: 3,
    },

    buttonStart: {
        marginTop: 571,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#155850',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
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
});

export default WelcomeScreen;