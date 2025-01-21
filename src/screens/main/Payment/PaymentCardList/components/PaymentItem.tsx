import React, {memo, useCallback} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BaseColor} from '@/constants';
import {WText} from '@/components/UIKit';

interface PaymentItemProps {
  image: string;
  title: string;
  icon: JSX.Element;
  onPress?: () => void;
}

function PaymentItem(props: PaymentItemProps) {
  const {image, icon, title, onPress} = props;

  const handleOnPress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPress}>
      <View style={styles.leftContainer}>
        <Image
          source={{uri: image}}
          style={styles.circleAvatar}
          resizeMode="contain"
        />

        <WText text={title} typo="Body2" color="Black" />
      </View>
      {icon}
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
  circleAvatar: {
    height: 24,
    width: 24,
    borderRadius: 2,
    backgroundColor: BaseColor.White,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(PaymentItem);
