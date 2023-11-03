
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function Social({ type, title, placeholder }: any) {
    const [text, onChangeText] = useState();
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <View style={styles.social}>
                <View style={styles.socialNetwork}>
                    <AntDesign name="google" size={26} color="#155850" style={styles.google} />
                </View>
                <View style={styles.socialNetwork}>
                    <FontAwesome name="facebook" size={26} color="#155850" style={styles.facebook} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
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
        borderRadius: 100,
    },

    google: {
        paddingLeft: 12,
        paddingTop: 12,
    },

    facebook: {
        paddingLeft: 16,
        paddingTop: 12,
    },
});

export default Social;