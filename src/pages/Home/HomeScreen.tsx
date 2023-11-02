import React from 'react';
import * as Style from './style'
import InputSearch from '../../containers/InputSearch/InputSearch';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import HomeFilter from '../../components/HomeFilter/HomeFilter';
import HomeContentTitle from '../../components/HomeContentTitle/HomeContentTitle';

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

            <SafeAreaView>
                <ScrollView>
                    <HomeContentTitle title="Điểm đến" />

                    <HomeFilter />
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
});

export default HomeScreen;