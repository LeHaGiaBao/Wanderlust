import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function InputForm({ type, title, placeholder }: any) {
    const [text, onChangeText] = useState();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            {
                type != 'password' ?
                    <>
                        <Text style={styles.textForm}>{title}</Text >
                        <TextInput
                            placeholder={placeholder}
                            style={styles.input}
                            value={text}
                        />
                    </>
                    :
                    <>
                        <Text style={styles.textForm}>{title}</Text>
                        <View style={styles.passwordContainer}>
                            <TextInput
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                                style={styles.inputPassword}
                                placeholder={placeholder}
                                placeholderTextColor="#6D6D6D"
                            />
                            <MaterialCommunityIcons
                                name={showPassword ? 'eye-off' : 'eye'}
                                size={24}
                                color="#6D6D6D"
                                style={styles.icon}
                                onPress={toggleShowPassword}
                            />
                        </View>
                    </>
            }
        </>
    );
}

const styles = StyleSheet.create({
    textForm: {
        textAlign: 'left',
        marginLeft: 16,
        color: '#000',
        fontSize: 15,
        fontWeight: '500',
    },

    input: {
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 16,
        marginRight: 16,
        height: 45,
        borderWidth: 2,
        padding: 10,
        borderColor: '#878787',
        borderRadius: 8,
        color: '#000',
    },

    passwordContainer: {
        marginLeft: 16,
        marginRight: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 14,
        marginTop: 10,
        marginBottom: 20,
        height: 45,
        borderWidth: 1,
        padding: 10,
        borderColor: '#878787',
        color: '#000',
    },

    inputPassword: {
        flex: 1,
        paddingVertical: 10,
        paddingRight: 10,
        fontSize: 16,
        color: '#000',
    },

    icon: {
        marginLeft: 10,
    },
});

export default InputForm;