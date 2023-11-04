import TopNavigationTab from '../../components/TopNavigationTab/TopNavigationTab';
import * as Style from './style'
import { StyleSheet, Text, View } from 'react-native';

function BookingScreen() {
    return (
        <View>
            <View style={styles.bookingHeader}>
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

                    <TopNavigationTab />
                </Style.Container>
            </View>

            <View style={styles.titleGrid}>
                <Text style={styles.title}>Đề xuất</Text>
                <Text style={styles.seeAll}>Xem tất cả</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    bookingHeader: {
        backgroundColor: '#155850',
        height: 425,
        borderEndEndRadius: 20,
        borderEndStartRadius: 20,
    },

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
    },

    titleGrid: {
        marginLeft: 16,
        marginRight: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 20,
        marginTop: 24,
        paddingLeft: 5,
        fontWeight: '600',
    },

    seeAll: {
        color: '#20A696',
        fontSize: 14,
        marginTop: 30,
        paddingLeft: 5,
        fontWeight: '500',
    },
});

export default BookingScreen;