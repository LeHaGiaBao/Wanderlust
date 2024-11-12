import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {WText} from '@/components/UIKit';
import {PrimaryColor} from '@/constants';
import translate from '@/translations/i18n';

interface ProfileDetailHeaderProps {
  numOfFeed: number;
}

const IMAGE =
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid';

function ProfileDetailHeader(props: ProfileDetailHeaderProps) {
  const {numOfFeed} = props;

  return (
    <View style={styles.container}>
      <Image source={{uri: IMAGE}} style={styles.avatar} />
      <View style={styles.content}>
        <WText text="Tui tên testing" typo="Heading1" color="Main" />
        <WText
          text={translate('source:n_feed', {n: numOfFeed})}
          typo="Body3"
          color="Gray"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    gap: 12,
  },
  avatar: {
    height: 72,
    width: 72,
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
  },
  content: {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: 8,
  },
});

export default memo(ProfileDetailHeader);
