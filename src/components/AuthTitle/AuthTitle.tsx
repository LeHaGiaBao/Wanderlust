import React from 'react';
import { StyleSheet, Text } from 'react-native';

function AuthTitle({ title, subTitle }: any) {
    return (
        <>
            <Text style={styles.textTitle}>{title}</Text>
            <Text style={styles.textSubTitle}>{subTitle}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    textTitle: {
        textAlign: 'center',
        marginTop: 120,
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
});

export default AuthTitle;