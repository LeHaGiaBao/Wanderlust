import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

function Button({ textButton, onPress }: any) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>{textButton}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
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
});

export default Button;