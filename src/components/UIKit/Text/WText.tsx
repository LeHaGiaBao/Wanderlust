/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {TypographyProps} from '@/@types/styles';
import {
  BaseColor,
  FontFamily,
  FontSize,
  PrimaryColor,
  SecondaryColor,
  StatusColor,
} from '@/constants';
import {memo} from 'react';
import {Text} from 'react-native';

function WText(props: TypographyProps) {
  let fontFamily = FontFamily.FontMedium;
  let fontSize = FontSize.FontSize16;
  let textColor = BaseColor.Black;

  switch (props.typo) {
    case 'Heading1':
      fontFamily = FontFamily.FontRegular;
      fontSize = FontSize.FontSize20;
      break;
    case 'Heading2':
      fontFamily = FontFamily.FontRegular;
      fontSize = FontSize.FontSize16;
      break;
    case 'Body1':
      fontFamily = FontFamily.FontMedium;
      fontSize = FontSize.FontSize16;
      break;
    case 'Body2':
      fontFamily = FontFamily.FontMedium;
      fontSize = FontSize.FontSize14;
      break;
    case 'Body3':
      fontFamily = FontFamily.FontMedium;
      fontSize = FontSize.FontSize12;
      break;
    case 'Button1':
      fontFamily = FontFamily.FontMedium;
      fontSize = FontSize.FontSize20;
      break;
    case 'Button2':
      fontFamily = FontFamily.FontMedium;
      fontSize = FontSize.FontSize12;
      break;
    case 'Label':
      fontFamily = FontFamily.FontMedium;
      fontSize = FontSize.FontSize10;
      break;
    case 'Helper':
      fontFamily = FontFamily.FontMedium;
      fontSize = FontSize.FontSize12;
      break;
    case 'Small':
      fontFamily = FontFamily.FontMedium;
      fontSize = FontSize.FontSize8;
      break;
  }

  switch (props.color) {
    case 'Main':
      textColor = PrimaryColor.Main;
      break;
    case 'Pressed':
      textColor = PrimaryColor.Pressed;
      break;
    case 'Light':
      textColor = PrimaryColor.Light;
      break;
    case 'Yellow':
      textColor = SecondaryColor.Yellow;
      break;
    case 'Success':
      textColor = StatusColor.Success;
      break;
    case 'Error':
      textColor = StatusColor.Error;
      break;
    case 'Black':
      textColor = BaseColor.Black;
      break;
    case 'DarkGray':
      textColor = BaseColor.DarkGray;
      break;
    case 'Gray':
      textColor = BaseColor.Gray;
      break;
    case 'MiddleGray':
      textColor = BaseColor.MiddleGray;
      break;
    case 'LightGray':
      textColor = BaseColor.LightGray;
      break;
    case 'LightLightGray':
      textColor = BaseColor.LightLightGray;
      break;
    case 'White':
      textColor = BaseColor.White;
      break;
  }

  return (
    <Text
      style={{
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: textColor,
        textDecorationLine: props.typo === 'Helper' ? 'underline' : 'none',
      }}>
      {props.text}
    </Text>
  );
}

export default memo(WText);
