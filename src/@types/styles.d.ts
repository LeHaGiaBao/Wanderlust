import {StyleProp} from 'react-native';

export type TypoType =
  | 'Heading1'
  | 'Heading2'
  | 'Button1'
  | 'Button2'
  | 'Body1'
  | 'Body2'
  | 'Body3'
  | 'Label'
  | 'Helper'
  | 'Small';

export type ColorType =
  | 'Main'
  | 'Pressed'
  | 'Light'
  | 'Yellow'
  | 'Success'
  | 'Error'
  | 'Black'
  | 'DarkGray'
  | 'Gray'
  | 'MiddleGray'
  | 'LightGray'
  | 'LightLightGray'
  | 'White';

export interface TypographyProps {
  text?: string;
  typo?: TypoType;
  color?: ColorType;
  styles?: StyleProp;
}
