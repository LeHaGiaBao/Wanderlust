import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function RecommendScreen() {
    return (
        <View style={styles.container}>
            <Text>Đề xuất hành trình</Text>
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

export default RecommendScreen;