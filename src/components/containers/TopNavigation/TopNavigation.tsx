import React, {memo, useCallback} from 'react';
import {PrimaryColor} from '@/constants';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {ArrowCircleLeft} from 'iconsax-react-native';
import {WText} from '@/components/UIKit';
import {useWanderlustNavigation} from '@/hooks/core/core';

interface TopNavigationProps {
  title?: string;
  rightNode?: JSX.Element;
}

function TopNavigation(props: TopNavigationProps) {
  const {title, rightNode} = props;
  const nav = useWanderlustNavigation();

  const handleGoBack = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <ArrowCircleLeft size={20} color={PrimaryColor.Main} />
      </TouchableOpacity>
      {!rightNode ? null : rightNode}
      <View style={styles.title}>
        <WText text={title ?? ''} typo="Heading2" color="Black" />
      </View>
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
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    alignItems: 'center',
  },
});

export default memo(TopNavigation);
