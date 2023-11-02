import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'Tất cả',
    },
    {
        id: '2',
        title: 'Phổ biến',
    },
    {
        id: '3',
        title: 'Gần bạn',
    },
    {
        id: '4',
        title: 'Ghé thăm nhiều nhất',
    },
];

type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
    title === 'Tất cả'
        ?
        <View style={styles.itemAll}>
            <Text style={styles.titleAll}>{title}</Text>
        </View>
        :
        <View style={styles.itemList}>
            <Text style={styles.titleList}>{title}</Text>
        </View>
);

function HomeFilter() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                horizontal
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
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
        color: '#155850',
        fontSize: 12,
        marginTop: 26,
        paddingLeft: 5,
    },

    container: {
        marginTop: 5,
        flex: 1,
    },

    itemAll: {
        backgroundColor: '#D7F3F0',
        paddingTop: 9,
        paddingBottom: 9,
        paddingLeft: 16,
        paddingRight: 16,
        height: 35,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 50,
    },

    itemList: {
        backgroundColor: '#F7F7F7',
        paddingTop: 9,
        paddingBottom: 9,
        paddingLeft: 16,
        paddingRight: 16,
        height: 35,
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 50,
    },

    titleAll: {
        color: '#155850',
        fontSize: 15,
    },

    titleList: {
        color: '#6D6D6D',
        fontSize: 15,
    },
});

export default HomeFilter;