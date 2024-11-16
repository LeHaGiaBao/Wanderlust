import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {WText} from '@/components/UIKit';
import translate from '@/translations/i18n';
import {ArrowCircleLeft} from 'iconsax-react-native';
import {PrimaryColor} from '@/constants';
import {useWanderlustNavigation} from '@/hooks/core/core';

function TopNavigation() {
  const nav = useWanderlustNavigation();

  const handleGoBack = useCallback(() => {
    if (nav.canGoBack()) {
      nav.goBack();
    }
  }, [nav]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoBack}>
      <ArrowCircleLeft size={16} color={PrimaryColor.Main} />
      <WText text={translate('source:back')} typo="Button2" color="Main" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: 77,
    top: 0,
    left: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
});

export default memo(TopNavigation);
