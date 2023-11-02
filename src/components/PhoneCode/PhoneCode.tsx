import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function PhoneCode() {
    const [visible, setVisible] = useState(false);

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    const renderDropdown = () => {
        if (visible) {
            return (
                <Text style={styles.dropdown}>
                    This is where the dropdown will be rendered.
                </Text>
            );
        }
    };

    return (
        <>
            <TouchableOpacity
                style={styles.button}
                onPress={toggleDropdown}
            >
                {renderDropdown()}
                <Text style={styles.buttonText}>🇻🇳</Text>
                <Text style={styles.buttonText}>+84</Text>
                <MaterialIcons name="arrow-drop-down" size={20} color="#6D6D6D" />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        height: 45,
        paddingHorizontal: 10,
        zIndex: 1,
        borderWidth: 2,
        padding: 10,
        borderColor: '#878787',
        borderRadius: 8,
        color: '#000',
    },

    buttonText: {
        flex: 1,
        textAlign: 'center',
    },

    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 50,
    },
});

export default PhoneCode;