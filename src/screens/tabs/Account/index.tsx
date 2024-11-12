/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useMemo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import {
  Building4,
  Airplane,
  TicketDiscount,
  ProfileCircle,
  EmptyWallet,
  Key,
  MessageQuestion,
  SecuritySafe,
  DirectboxNotif,
  InfoCircle,
  LogoutCurve,
} from 'iconsax-react-native';
import AccountTopNavBar from './components/Account.TopNavBar';
import AccountSubNav from './components/Account.SubNav';
import NavigateContainer from './components/NavigateContainer';
import translate from '@/translations/i18n';
import {WText} from '@/components/UIKit';

const TOP_LEVEL_DATA = [
  {
    id: 1,
    icon: <Building4 size={24} color={PrimaryColor.Main} variant="Bold" />,
    title: translate('source:my_booking'),
    route: '',
  },
  {
    id: 2,
    icon: <Airplane size={24} color={PrimaryColor.Main} variant="Bold" />,
    title: translate('source:my_flight'),
    route: '',
  },
  {
    id: 3,
    icon: <TicketDiscount size={24} color={PrimaryColor.Main} variant="Bold" />,
    title: translate('source:voucher'),
    route: '',
  },
];

const SETTING_DATA = [
  {
    id: 1,
    icon: <ProfileCircle size={24} color={PrimaryColor.Main} />,
    title: translate('source:profile_information'),
    route: '',
  },
  {
    id: 2,
    icon: <EmptyWallet size={24} color={PrimaryColor.Main} />,
    title: translate('source:payment_method'),
    route: '',
  },
  {
    id: 3,
    icon: <Key size={24} color={PrimaryColor.Main} />,
    title: translate('source:change_password'),
    route: '',
  },
];

const ABOUT_APP_DATA = [
  {
    id: 1,
    icon: <MessageQuestion size={24} color={PrimaryColor.Main} />,
    title: translate('source:support_center'),
    route: '',
  },
  {
    id: 2,
    icon: <SecuritySafe size={24} color={PrimaryColor.Main} />,
    title: translate('source:privacy_list'),
    route: '',
  },
  {
    id: 3,
    icon: <DirectboxNotif size={24} color={PrimaryColor.Main} />,
    title: translate('source:term_and_condition'),
    route: '',
  },
  {
    id: 4,
    icon: <InfoCircle size={24} color={PrimaryColor.Main} />,
    title: translate('source:about_us'),
    route: '',
  },
];

function AccountScreen() {
  const renderItem = useCallback(({item}: any) => {
    const {icon, title, route} = item;

    return <NavigateContainer icon={icon} title={title} route={route} />;
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 8}} />;
  }, []);

  const renderSettingNavigate = useMemo(() => {
    return (
      <FlatList
        data={SETTING_DATA}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        style={styles.listNavigate}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={
          <View style={styles.header}>
            <WText
              text={translate('source:setting')}
              typo="Heading2"
              color="Black"
            />
          </View>
        }
      />
    );
  }, [renderItem, renderSeparator]);

  const renderAboutAppNavigate = useMemo(() => {
    return (
      <FlatList
        data={ABOUT_APP_DATA}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        style={styles.listNavigate}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={
          <View style={styles.header}>
            <WText
              text={translate('source:about_app')}
              typo="Heading2"
              color="Black"
            />
          </View>
        }
      />
    );
  }, [renderItem, renderSeparator]);

  return (
    <FlatList
      data={TOP_LEVEL_DATA}
      showsVerticalScrollIndicator={false}
      style={styles.container}
      renderItem={renderItem}
      ItemSeparatorComponent={renderSeparator}
      ListHeaderComponent={
        <>
          <AccountTopNavBar />
          <View style={styles.subNav}>
            <AccountSubNav />
          </View>
        </>
      }
      ListFooterComponent={
        <>
          {renderSettingNavigate}
          {renderAboutAppNavigate}
          <View style={styles.footer}>
            <NavigateContainer
              icon={<LogoutCurve size={24} color={PrimaryColor.Main} />}
              title={translate('source:logout')}
              route={''}
            />
          </View>
        </>
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 40,
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  header: {
    marginBottom: 16,
  },
  subNav: {
    marginTop: 40,
    marginBottom: 44,
  },
  listNavigate: {
    marginTop: 24,
  },
  footer: {
    marginTop: 40,
    marginBottom: 100,
  },
});

export default memo(AccountScreen);
