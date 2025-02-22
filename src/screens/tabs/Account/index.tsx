/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useMemo, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BaseColor, Devices, PrimaryColor, StatusColor} from '@/constants';
import {
  TicketDiscount,
  ProfileCircle,
  EmptyWallet,
  Key,
  MessageQuestion,
  SecuritySafe,
  DirectboxNotif,
  InfoCircle,
} from 'iconsax-react-native';
import AccountTopNavBar from './components/Account.TopNavBar';
import AccountSubNav from './components/Account.SubNav';
import NavigateContainer from './components/NavigateContainer';
import translate from '@/translations/i18n';
import {WIcon, WText} from '@/components/UIKit';
import {Routes} from '@/routes/routes';
import {useSignOut} from '@/hooks/auth/useAuth';
import Modal from 'react-native-modal';

const TOP_LEVEL_DATA = [
  {
    id: 1,
    icon: <WIcon icon="building" size={24} color={PrimaryColor.Main} />,
    title: translate('source:my_booking'),
    route: Routes.my_booking,
  },
  {
    id: 2,
    icon: <WIcon icon="airplane" size={24} color={PrimaryColor.Main} />,
    title: translate('source:my_flight'),
    route: Routes.my_flight,
  },
  {
    id: 3,
    icon: <TicketDiscount size={24} color={PrimaryColor.Main} variant="Bold" />,
    title: translate('source:voucher'),
    route: Routes.my_voucher,
  },
];

const SETTING_DATA = [
  {
    id: 1,
    icon: <ProfileCircle size={24} color={PrimaryColor.Main} />,
    title: translate('source:profile_information'),
    route: Routes.profile_detail,
  },
  {
    id: 2,
    icon: <EmptyWallet size={24} color={PrimaryColor.Main} />,
    title: translate('source:payment_method'),
    route: Routes.my_payment,
  },
  {
    id: 3,
    icon: <Key size={24} color={PrimaryColor.Main} />,
    title: translate('source:change_password'),
    route: Routes.change_password,
  },
];

const ABOUT_APP_DATA = [
  {
    id: 1,
    icon: <MessageQuestion size={24} color={PrimaryColor.Main} />,
    title: translate('source:support_center'),
    route: Routes.support_center,
  },
  {
    id: 2,
    icon: <SecuritySafe size={24} color={PrimaryColor.Main} />,
    title: translate('source:privacy_list'),
    route: Routes.privacy_list,
  },
  {
    id: 3,
    icon: <DirectboxNotif size={24} color={PrimaryColor.Main} />,
    title: translate('source:term_and_condition'),
    route: Routes.term_and_condition,
  },
  {
    id: 4,
    icon: <InfoCircle size={24} color={PrimaryColor.Main} />,
    title: translate('source:about_us'),
    route: Routes.about_us,
  },
];

function AccountScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const {signOut} = useSignOut();

  const handleSignOut = useCallback(async () => {
    await signOut();
    setModalVisible(!isModalVisible);
  }, [isModalVisible, signOut]);

  const toggleModal = useCallback(() => {
    setModalVisible(!isModalVisible);
  }, [isModalVisible]);

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
    <>
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
                icon={
                  <WIcon icon="logout" size={24} color={PrimaryColor.Main} />
                }
                title={translate('source:logout')}
                onPress={toggleModal}
              />
            </View>
          </>
        }
      />

      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <WText
            text={translate('source:notification')}
            typo="Heading2"
            color="Main"
          />
          <WText
            text={translate('source:log_out_des')}
            typo="Body2"
            color="Black"
          />
          <View style={styles.modalButton}>
            <TouchableOpacity
              style={styles.buttonMainStyle}
              onPress={handleSignOut}>
              <WText
                text={translate('source:logout')}
                typo="Body2"
                color="White"
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonErrorStyle}
              onPress={toggleModal}>
              <WText
                text={translate('source:cancel')}
                typo="Body2"
                color="Error"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
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
  modal: {
    borderRadius: 8,
    padding: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BaseColor.White,
    gap: 24,
    height: 200,
  },
  modalButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  buttonMainStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    borderRadius: 25,
    backgroundColor: PrimaryColor.Main,
  },
  buttonErrorStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: StatusColor.Error,
    backgroundColor: BaseColor.White,
  },
});

export default memo(AccountScreen);
