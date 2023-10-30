import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function OnBoarding() {
    return (
        <View style={styles.welcomeView}>
            <Text style={styles.textWelcome}>Wanderlust</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeView: {
        flex: 1,
        backgroundColor: '#155850',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textWelcome: {
        color: '#fff',
        fontSize: 36,
    },
});

export default OnBoarding;