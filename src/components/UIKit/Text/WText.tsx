/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {TypographyProps} from '@/@types/styles';
import {generateColor, generateTypography} from '@/components/UIKit/Utils';
import {memo} from 'react';
import {Text} from 'react-native';

function WText(props: TypographyProps) {
  const {
    text = '',
    typo,
    color,
    styles,
    numberOfLines,
    onTextLayout,
    ...rest
  } = props;

  const {fontFamily, fontSize} = generateTypography(typo);
  let textColor = generateColor(color);

  return (
    <Text
      style={[
        styles,
        {
          fontFamily: fontFamily,
          fontSize: fontSize,
          color: textColor,
          textDecorationLine: typo === 'Helper' ? 'underline' : 'none',
        },
      ]}
      numberOfLines={numberOfLines ?? undefined}
      onTextLayout={onTextLayout}
      {...rest}>
      {text}
    </Text>
  );
}

export default memo(WText);
