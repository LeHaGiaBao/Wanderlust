import React from 'react';
import * as Style from './style'
import InputSearch from '../../containers/InputSearch/InputSearch';
import { View, StyleSheet, Text } from 'react-native';
import HomeFilter from '../../components/HomeFilter/HomeFilter';

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

            <View style={styles.destinationGrid}>
                <Text style={styles.destination}>Điểm đến</Text>
                <Text style={styles.seeAll}>Xem tất cả</Text>
            </View>

            <HomeFilter />

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

    destinationGrid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    destination: {
        fontSize: 16,
        marginTop: 24,
        paddingLeft: 5,
    },

    seeAll: {
        color: '#20A696',
        fontSize: 12,
        marginTop: 26,
        paddingLeft: 5,
        fontWeight: '500',
    },
});

export default HomeScreen;