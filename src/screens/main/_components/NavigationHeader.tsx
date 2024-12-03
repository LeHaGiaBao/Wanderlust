import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {WText} from '@/components/UIKit';

interface NavigationHeaderProps {
  title: string;
  navigateTitle?: string;
  onPress?: () => void;
}

function NavigationHeader(props: NavigationHeaderProps) {
  const {title, navigateTitle, onPress} = props;

  const handleOnPressItem = useCallback(() => {
    onPress?.();
  }, [onPress]);

  return (
    <View style={styles.navigationHeader}>
      <WText text={title} typo="Heading2" color="Black" />
      <TouchableOpacity onPress={handleOnPressItem}>
        <WText text={navigateTitle || ''} typo="Body3" color="Main" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default memo(NavigationHeader);
