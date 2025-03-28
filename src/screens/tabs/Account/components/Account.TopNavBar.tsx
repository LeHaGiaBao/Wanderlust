/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {WText} from '@/components/UIKit';
import {PrimaryColor} from '@/constants';
import translate from '@/translations/i18n';
import {ArrowRight2} from 'iconsax-react-native';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';
import {useUserData} from '@/hooks/auth/useAuth';

const IMAGE =
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid';

function AccountTopNavBar() {
  const nav = useWanderlustNavigation();
  const {userName} = useUserData();

  const goToProfileFeed = useCallback(() => {
    nav.navigate(Routes.profile_feed);
  }, [nav]);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{uri: IMAGE}} style={styles.avatar} />
        <View style={styles.leftContent}>
          <WText
            text={userName}
            typo="Heading1"
            color="Main"
            textStyles={{textTransform: 'capitalize'}}
          />
          <WText
            text={translate('source:view_account')}
            typo="Body3"
            color="Gray"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.rightContainer} onPress={goToProfileFeed}>
        <ArrowRight2 size={20} color={PrimaryColor.Main} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    height: 72,
    width: 72,
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
  },
  leftContent: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: 8,
  },
  rightContainer: {
    height: 32,
    width: 32,
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(AccountTopNavBar);
