import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import images from '@/assets/images';
import {WText} from '@/components/UIKit';

function MessageScreen() {
  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:message')} />
      <View style={styles.haveNoMessage}>
        <Image source={images.NoMesssage} />
        <WText
          text={translate('source:no_message')}
          typo="Heading2"
          color="Main"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  haveNoMessage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 35,
  },
});

export default memo(MessageScreen);
