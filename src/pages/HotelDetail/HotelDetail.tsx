import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'

function HotelDetail() {
    const navigation = useNavigation()

    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <ScrollView>
            <ImageBackground source={require('../../../assets/Detail/vinpearl.jpg')} style={styles.backgroundImage}>
                <View style={styles.componentContainer}>
                    <View style={styles.header}>
                        <Pressable onPress={handleBack}>
                            <View style={styles.back}>
                                <AntDesign name='leftcircleo' size={20} color="#155850" style={styles.iconBack} />
                            </View>
                        </Pressable>
                        <View style={styles.listIcon}>
                            <Pressable onPress={handleBack}>
                                <View style={styles.shareIcon}>
                                    <Ionicons name='share-outline' size={20} color="#155850" style={styles.iconBack} />
                                </View>
                            </Pressable>
                            <Pressable onPress={handleBack}>
                                <View style={styles.heartIcon}>
                                    <Fontisto name="heart" size={18} color="#E52525" style={styles.iconBack} />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: 300,
    },

    componentContainer: {
        marginRight: 16,
        marginLeft: 16,
        zIndex: 1,
    },

    header: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    back: {
        backgroundColor: '#D7F3F0',
        height: 32,
        width: 32,
        borderRadius: 100,
    },

    shareIcon: {
        backgroundColor: '#D7F3F0',
        height: 32,
        width: 32,
        borderRadius: 100,
        marginRight: 8,
    },

    heartIcon: {
        backgroundColor: '#D7F3F0',
        height: 32,
        width: 32,
        borderRadius: 100,
        marginRight: 8,
        paddingTop: 1,
    },

    iconBack: {
        padding: 6,
    },

    listIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default HotelDetail;