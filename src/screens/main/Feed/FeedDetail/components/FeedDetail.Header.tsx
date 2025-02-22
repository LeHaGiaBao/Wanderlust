import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {WText} from '@/components/UIKit';
import {PrimaryColor} from '@/constants';

const avatar =
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid';

interface FeedDetailHeaderProps {
  image: string;
}

function FeedDetailHeader(props: FeedDetailHeaderProps) {
  const {image} = props;

  return (
    <>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.headerItem}>
          <Image source={{uri: avatar}} style={styles.circleAvatar} />
          <WText text="Tui ten testing" typo="Body1" color="Black" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
  },
  content: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  headerItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  circleAvatar: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(FeedDetailHeader);
