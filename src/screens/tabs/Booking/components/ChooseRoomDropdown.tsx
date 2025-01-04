import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {WText} from '@/components/UIKit';
import {BaseColor, PrimaryColor} from '@/constants';
import {Add, Minus} from 'iconsax-react-native';
import translate from '@/translations/i18n';

interface ChooseRoomDropdownProps {
  iconWrapper: React.ElementType;
  text: string;
  value: string;
  onMinusPress: () => void;
  onPlusPress: () => void;
}

function ChooseRoomDropdown(props: ChooseRoomDropdownProps) {
  const {iconWrapper, text, value, onMinusPress, onPlusPress} = props;

  const Wrapper = iconWrapper;

  const handleOnMinusPress = useCallback(() => {
    onMinusPress?.();
  }, [onMinusPress]);

  const handleOnPlusPress = useCallback(() => {
    onPlusPress?.();
  }, [onPlusPress]);

  return (
    <>
      <View style={styles.dropdownItem}>
        <View style={styles.leftDropdown}>
          <Wrapper size={20} variant="Linear" color={PrimaryColor.Main} />
          <WText text={translate(text)} typo="Body2" color="DarkGray" />
        </View>

        <View style={styles.rightDropdown}>
          <TouchableOpacity onPress={handleOnMinusPress}>
            <Minus size={20} variant="Linear" color={BaseColor.DarkGray} />
          </TouchableOpacity>

          <WText text={value ?? 0} typo="Body1" color="Main" />

          <TouchableOpacity onPress={handleOnPlusPress}>
            <Add size={20} variant="Linear" color={BaseColor.DarkGray} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  dropdownItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftDropdown: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rightDropdown: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
});

export default memo(ChooseRoomDropdown);
