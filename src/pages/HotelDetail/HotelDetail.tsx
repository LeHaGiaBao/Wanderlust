import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Pressable, ScrollView, StyleSheet, View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import HomeContentTitle from '../../components/HomeContentTitle/HomeContentTitle';

function HotelDetail() {
    const navigation = useNavigation()

    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <ScrollView>
            <ImageBackground source={require('../../../assets/Detail/vinpearl.jpg')} style={styles.backgroundImage}>
                <View style={styles.headerContainer}>
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

                <View style={styles.contentComponent}>
                    <View style={styles.contentHeader}>
                        <Text style={styles.titleName}>Khu nghỉ dưỡng Vinpearl Wonderwold Phú Quốc</Text>
                        <View style={styles.grid}>
                            <View>
                                <View style={styles.gridStar}>
                                    <AntDesign name="star" size={20} color="#F9B21A" />
                                    <Text style={styles.starVote}>4.8</Text>
                                    <Text style={styles.subVote}>(4.5k Lượt đánh giá)</Text>
                                </View>
                                <View style={styles.grid}>
                                    <MaterialIcons name="place" size={20} color="#155850" />
                                    <Text style={styles.subText}>Phú Quốc, Kiên Giang, Việt Nam</Text>
                                </View>
                            </View>
                            <View style={styles.map}>
                                <Feather name="map" size={20} color="#155850" />
                                <Text style={styles.mapText}>Chỉ đường</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.service}>
                        <HomeContentTitle title="Tiện nghi" />
                        <View style={styles.listService}>
                            <View style={styles.gridLayout}>
                                <AntDesign name="wifi" size={20} color="#053731" />
                                <Text style={styles.serviceText}>Wifi</Text>
                            </View>
                            <View style={styles.gridLayout}>
                                <MaterialCommunityIcons name="silverware-fork-knife" size={20} color="#053731" />
                                <Text style={styles.serviceText}>Nhà hàng</Text>
                            </View>
                            <View style={styles.gridLayout}>
                                <FontAwesome5 name="umbrella-beach" size={20} color="#053731" />
                                <Text style={styles.serviceText}>Bãi biển riêng tư</Text>
                            </View>
                        </View>
                        <View style={styles.listService}>
                            <View style={styles.gridLayout}>
                                <MaterialCommunityIcons name="parking" size={20} color="#053731" />
                                <Text style={styles.serviceText}>Bãi đậu xe</Text>
                            </View>
                            <View style={styles.gridLayout}>
                                <MaterialCommunityIcons name="swim" size={20} color="#053731" />
                                <Text style={styles.serviceText}>Hồ bơi</Text>
                            </View>
                            <View style={styles.gridLayout}>
                                <MaterialCommunityIcons name="glass-cocktail" size={20} color="#053731" />
                                <Text style={styles.serviceText}>Quán Bar</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.introduction}>
                        <Text style={styles.infoIntro}>Tổng quan</Text>
                        <Text style={styles.subTextIntro}>
                            Nằm trên đảo Phú Quốc, cách Bãi Dài 700m, Vinpearl Wonderworld Phu Quoc cung cấp chỗ nghỉ với hồ bơi ngoài trời, chỗ đỗ xe riêng miễn phí, trung tâm thể dục và khu vườn. Resort 5 sao này có...
                            {' '}
                            {' '}
                            <Text style={styles.moreText}>Xem thêm</Text>
                        </Text>
                    </View>

                    <View style={styles.feedback}>
                        <HomeContentTitle title="Đánh giá" />

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

    headerContainer: {
        marginRight: 16,
        marginLeft: 16,
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
    },

    contentHeader: {
        paddingLeft: 16,
        paddingRight: 16,
    },

    contentComponent: {
        marginTop: 180,
        paddingTop: 24,
        backgroundColor: '#FFF',
        borderTopStartRadius: 24,
        borderTopEndRadius: 24,
        height: 'auto',
    },

    titleName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#0D0D0D',
    },

    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    gridStar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 16,
        marginBottom: 8,
    },

    starVote: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: '500',
        color: '#0D0D0D',
    },

    subVote: {
        marginTop: 2,
        marginLeft: 8,
        fontSize: 14,
        fontWeight: '500',
        color: '#6D6D6D',
    },

    subText: {
        marginLeft: 8,
        fontSize: 14,
        fontWeight: '500',
        color: '#6D6D6D',
    },

    map: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },

    mapText: {
        marginTop: 6,
        fontSize: 12,
        fontWeight: '500',
        color: '#155850',
    },

    service: {
        paddingBottom: 20,
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 17,
        backgroundColor: '#D7F3F0',
    },

    listService: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    serviceText: {
        marginTop: 2,
        marginLeft: 4,
        fontSize: 14,
        fontWeight: '500',
        color: '#6D6D6D',
    },

    gridLayout: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    introduction: {
        marginTop: 16,
        paddingLeft: 16,
        paddingRight: 16,
    },

    infoIntro: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0D0D0D',
    },

    subTextIntro: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: '500',
        color: '#878787',
    },

    moreText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#155850',
        textDecorationLine: 'underline',
    },

    feedback: {
        paddingLeft: 16,
        paddingRight: 16,
    }
})

export default HotelDetail;