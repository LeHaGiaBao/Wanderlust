import {ColorType, TypoType} from '@/@types/styles';
import {
  BaseColor,
  FontFamily,
  FontSize,
  PrimaryColor,
  SecondaryColor,
  StatusColor,
} from '@/constants';

export const generateColor = (color: ColorType) => {
  switch (color) {
    case 'Main':
      return PrimaryColor.Main;
    case 'Pressed':
      return PrimaryColor.Pressed;
    case 'Light':
      return PrimaryColor.Light;
    case 'Yellow':
      return SecondaryColor.Yellow;
    case 'Success':
      return StatusColor.Success;
    case 'Error':
      return StatusColor.Error;
    case 'Black':
      return BaseColor.Black;
    case 'DarkGray':
      return BaseColor.DarkGray;
    case 'Gray':
      return BaseColor.Gray;
    case 'MiddleGray':
      return BaseColor.MiddleGray;
    case 'LightGray':
      return BaseColor.LightGray;
    case 'LightLightGray':
      return BaseColor.LightLightGray;
    case 'White':
      return BaseColor.White;
  }
};

export const generateTypography = (typo: TypoType) => {
  let fontFamily = FontFamily.FontMedium;
  let fontSize = FontSize.FontSize16;

  switch (typo) {
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

  return {
    fontFamily,
    fontSize,
  };
};
