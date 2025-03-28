/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {TypographyProps} from '@/@types/styles';
import {generateColor, generateTypography} from '@/utils';
import {memo} from 'react';
import {Text} from 'react-native';

function WText(props: TypographyProps) {
  const {
    text = '',
    typo,
    color,
    styles,
    textStyles,
    numberOfLines,
    onTextLayout,
    decoration,
    ...rest
  } = props;

  const {fontFamily, fontSize, fontWeight} = generateTypography(typo);
  let textColor = generateColor(color);

  return (
    <Text
      style={[
        styles,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          color: textColor,
          textDecorationLine:
            typo === 'Helper'
              ? 'underline'
              : decoration === 'line-through'
                ? 'line-through'
                : 'none',
          fontWeight: fontWeight ?? '500',
        },
        textStyles,
      ]}
      numberOfLines={numberOfLines ?? undefined}
      onTextLayout={onTextLayout}
      {...rest}>
      {text}
    </Text>
  );
}

export default memo(WText);
