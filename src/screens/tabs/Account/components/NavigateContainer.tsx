import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BaseColor, PrimaryColor} from '@/constants';
import {ArrowCircleRight} from 'iconsax-react-native';
import {WText} from '@/components/UIKit';
import {useWanderlustNavigation} from '@/hooks/core/core';

interface NavigateContainerProps {
  icon: JSX.Element;
  title: string;
  route: string;
}

function NavigateContainer(props: NavigateContainerProps) {
  const nav = useWanderlustNavigation();
  const {icon, title, route} = props;

  const handleOnPress = useCallback(() => {
    nav.navigate(route);
  }, [nav, route]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <View style={styles.leftContainer}>
        {icon}
        <WText text={title} typo="Body2" color="Black" />
      </View>
      <ArrowCircleRight size={20} color={PrimaryColor.Main} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowColor: BaseColor.Gray,
    elevation: 5,
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default memo(NavigateContainer);
