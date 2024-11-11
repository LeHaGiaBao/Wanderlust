import {WText} from '@/components/UIKit';
import {BaseColor, PrimaryColor} from '@/constants';
import translate from '@/translations/i18n';
import React, {memo, useMemo} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Notification, SearchNormal1} from 'iconsax-react-native';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

const IMAGE =
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid';

function HomeTopNavBar() {
  const nav = useWanderlustNavigation();

  const renderAvatarConatainer = useMemo(() => {
    return (
      <View style={styles.avatarContainer}>
        <TouchableOpacity>
          <Image source={{uri: IMAGE}} style={styles.circle} />
        </TouchableOpacity>
        <View style={styles.content}>
          <WText text={translate('source:hello')} typo="Body1" color="Main" />
          <WText
            text={translate('source:where_want_to_go')}
            typo="Body3"
            color="Gray"
          />
        </View>
      </View>
    );
  }, []);

  const renderNotificationIcon = useMemo(() => {
    return (
      <TouchableOpacity
        style={styles.circle}
        onPress={() => nav.navigate(Routes.notification)}>
        <Notification size={20} color={PrimaryColor.Main} />
      </TouchableOpacity>
    );
  }, [nav]);

  const renderSearchBar = useMemo(() => {
    return (
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => nav.navigate(Routes.search)}>
        <SearchNormal1 size={24} color={BaseColor.Gray} />
        <WText
          text={translate('source:find_in_wanderlust')}
          typo="Body2"
          color="Gray"
        />
      </TouchableOpacity>
    );
  }, [nav]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {renderAvatarConatainer}
        {renderNotificationIcon}
      </View>
      {renderSearchBar}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  circle: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    gap: 8,
  },
  searchBar: {
    marginVertical: 24,
    paddingHorizontal: 16,
    width: '100%',
    height: 40,
    backgroundColor: BaseColor.LightGray,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default memo(HomeTopNavBar);
