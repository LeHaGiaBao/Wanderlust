import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import {ArrowLeft, SearchNormal1} from 'iconsax-react-native';
import {useWanderlustNavigation} from '@/hooks/core/core';
import WInputField from '@/components/UIKit/Input/WInputField';
import translate from '@/translations/i18n';

function SearchScreen() {
  const nav = useWanderlustNavigation();

  const handleGoBack = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backIcon}>
          <ArrowLeft size={32} color={PrimaryColor.Main} />
        </TouchableOpacity>
        <View style={styles.searchField}>
          <WInputField
            type="Text"
            placeholder={translate('source:search_placeholder')}
            border={false}
            borderRadius={25}
            inputStyles={styles.searchInput}
            iconAlign="Left"
            icon={<SearchNormal1 size={24} color={PrimaryColor.Main} />}
          />
        </View>
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
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 35,
    gap: 8,
  },
  backIcon: {
    maxWidth: '10%',
  },
  searchField: {
    maxWidth: '95%',
  },
  searchInput: {
    height: 40,
    backgroundColor: BaseColor.LightGray,
    borderRadius: 25,
  },
});

export default memo(SearchScreen);
