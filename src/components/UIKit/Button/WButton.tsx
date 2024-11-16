/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {ButtonProps} from '@/@types/styles';
import {memo, useCallback, useMemo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import WText from '../Text/WText';
import {generateColor, generateRadius} from '@/utils';
import {BaseColor} from '@/constants';

function WButton(props: ButtonProps) {
  const {
    text,
    typo,
    color,
    backgroundColor,
    border = false,
    radius = '25',
    width = '100%',
    height = 56,
    disable = false,
    buttonStyles,
    icon,
    iconAlign,
    onPress,
    onLongPress,
    ...rest
  } = props;

  const background = useMemo(() => {
    if (border) {
      return BaseColor.White;
    }
    if (disable) {
      return BaseColor.LightGray;
    }
    return generateColor(backgroundColor);
  }, [backgroundColor, border, disable]);

  const textColor = useMemo(() => {
    if (disable) {
      return 'MiddleGray';
    }
    return color;
  }, [color, disable]);

  const handleOnPress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  const handleOnLongPress = useCallback(() => {
    onLongPress?.();
  }, [onLongPress]);

  return (
    <TouchableOpacity
      style={[
        !disable && styles.button,
        buttonStyles,
        {
          backgroundColor: background,
          borderRadius: generateRadius(radius),
          width: width,
          height: height,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        },
      ]}
      onPress={handleOnPress}
      onLongPress={handleOnLongPress}
      {...rest}>
      {iconAlign === 'Left' && icon}
      <WText
        text={text}
        typo={typo}
        color={textColor}
        styles={styles.textStyles}
      />
      {iconAlign === 'Right' && icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 25 * 0.3,
    elevation: 5,
    display: 'flex',
  },
  textStyles: {
    marginVertical: 8,
  },
});

export default memo(WButton);
