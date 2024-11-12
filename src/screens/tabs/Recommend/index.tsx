import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import {WText} from '@/components/UIKit';
import translate from '@/translations/i18n';
import images from '@/assets/images';

function RecommendScreen() {
  return (
    <View style={styles.recommendScreen}>
      <View style={styles.commingSoon}>
        <Image source={images.NoTasks} />
        <WText
          text={translate('source:comming_soon')}
          typo="Heading2"
          color="Main"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  recommendScreen: {
    display: 'flex',
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  commingSoon: {
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

export default memo(RecommendScreen);
