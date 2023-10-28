import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Trang chủ</Text>
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

export default HomeScreen;