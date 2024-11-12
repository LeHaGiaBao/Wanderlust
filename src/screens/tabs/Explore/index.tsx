import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseColor, Devices} from '@/constants';
import TopNavBar from '../_components/TopNavBar';
import translate from '@/translations/i18n';

function ExploreScreen() {
  return (
    <View style={styles.exploreScreen}>
      <TopNavBar
        title={translate('source:hello')}
        subTitle={translate('source:share_experiences')}
        showSearchBar
        searchBarPlaceholder={translate('source:find_experiences')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  exploreScreen: {
    display: 'flex',
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
});

export default memo(ExploreScreen);
