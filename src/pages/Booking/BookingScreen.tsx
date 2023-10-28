import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function BookingScreen() {
    return (
        <View style={styles.container}>
            <Text>Đặt trước</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default BookingScreen;