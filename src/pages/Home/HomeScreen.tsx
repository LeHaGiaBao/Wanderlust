import React from 'react';
import * as Style from './style'
import InputSearch from '../../components/InputSearch/InputSearch';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import HomeFilter from '../../components/HomeFilter/HomeFilter';
import HomeContentTitle from '../../components/HomeContentTitle/HomeContentTitle';
import ListDestination from '../../components/ListDestination/ListDestination';
import ListHotel from '../../components/ListHotel/ListHotel';
import ListTour from '../../components/ListTour/ListTour';
import ListFlight from '../../components/ListFlight/ListFlight';

function HomeScreen() {
    return (
        <Style.Container>
            <Style.Header>
                <View style={styles.circleUser}>
                    <Style.UserIcon />
                </View>
                <Style.SubHeader>
                    <Style.Title>
                        Xin chào,
                    </Style.Title>
                    <Style.Subtitle>
                        Hôm nay bạn muốn đi đâu?
                    </Style.Subtitle>
                </Style.SubHeader>
                <View style={styles.circleNotification}>
                    <Style.NotificationIcon />
                </View>
            </Style.Header>

            <Style.InputContainer>
                <InputSearch placeholder="Tìm kiếm trong Wanderlust" />
            </Style.InputContainer>

            <SafeAreaView style={styles.safeArea}>
                <ScrollView>
                    <HomeContentTitle title="Điểm đến" />

                    <HomeFilter />

                    <View style={styles.listDestination}>
                        <ListDestination />
                    </View>

                    <HomeContentTitle title="Khách sạn" />

                    <View style={styles.listDestination}>
                        <ListHotel />
                    </View>

                    <HomeContentTitle title="Chuyến bay giá rẻ" />

                    <View style={styles.listDestination}>
                        <ListFlight />
                    </View>

                    <HomeContentTitle title="Tour giá hời" />

                    <View style={styles.listDestination}>
                        <ListTour />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </Style.Container>
    );
}

const styles = StyleSheet.create({
    circleUser: {
        paddingTop: 5,
        paddingLeft: 10,
        width: 40,
        height: 40,
        backgroundColor: '#D7F3F0',
        borderRadius: 100,
    },

    circleNotification: {
        marginLeft: 100,
        paddingTop: 5,
        paddingLeft: 10,
        width: 40,
        height: 40,
        backgroundColor: '#D7F3F0',
        borderRadius: 100,
    },

    safeArea: {
        marginBottom: 120,
    },

    listDestination: {
        marginTop: 12,
    }
});

export default HomeScreen;