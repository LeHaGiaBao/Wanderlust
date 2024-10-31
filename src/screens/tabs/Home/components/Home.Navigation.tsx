import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {WText} from '@/components/UIKit';
import translate from '@/translations/i18n';

interface NavigationProps {
  title: string;
  onPress: () => void;
}

function HomeNavigation(props: NavigationProps) {
  const {title, onPress} = props;

  const handleOnPress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  return (
    <View style={styles.container}>
      <WText text={title} typo="Heading2" color="Black" />
      <TouchableOpacity onPress={handleOnPress}>
        <WText text={translate('source:view_all')} typo="Body3" color="Main" />
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
});

export default memo(HomeNavigation);
