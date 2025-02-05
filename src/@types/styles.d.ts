import {Button, StyleProp, TextComponent} from 'react-native';

export type TypoType =
  | 'Title'
  | 'Description'
  | 'Heading1'
  | 'Heading2'
  | 'Button1'
  | 'Button2'
  | 'Body1'
  | 'Body2'
  | 'Body3'
  | 'Label'
  | 'Helper'
  | 'Small'
  | 'BoldTitle';

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

export type WRadius = '4' | '8' | '12' | '16' | '20' | '24' | '25' | '50';

export interface TypographyProps extends Partial<TextComponent> {
  text: string;
  typo: TypoType;
  color: ColorType;
  numberOfLines?: number;
  decoration?: 'underline' | 'line-through' | 'none';
  onTextLayout?: any;
  styles?: StyleProp;
}

export interface ButtonProps extends Partial<Button> {
  text: string;
  typo: TypoType;
  color: ColorType;
  backgroundColor: ColorType;
  radius?: WRadius;
  border?: boolean;
  width?: number;
  height?: number;
  disable?: boolean;
  buttonStyles?: StyleProp;
  icon?: JSX.Element;
  iconAlign?: 'Left' | 'Right';
  onPress?: () => void;
  onLongPress?: () => void;
}

export interface InputFieldsProps {
  type: 'Text' | 'Password' | 'OTP';
  text?: string;
  placeholder?: string;
  notification?: string;
  isError?: boolean;
  icon?: JSX.Element;
  iconAlign?: 'Left' | 'Right';
  inputStyles?: StyleProp;
  border?: boolean;
  borderRadius?: number;
  isNotification?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
  onLongPress?: () => void;
}

export interface FlightTicketProps {
  airlineLogo: string;
  airlineName: string;
  departureTime: string;
  departureCity: string;
  arrivalTime: string;
  arrivalCity: string;
  flightTime: string;
  flightType: string;
  ticketType: string;
  numOfPassengers: number;
  ticketPrice: string;
  onPress?: () => void;
}

export interface PlaceTicketProps {
  title: string;
  numberOfGuest: string;
  numerOfChildren: string;
  price: string;
  onEdit?: () => void;
}

export interface VoucherProps {
  name: string;
  description: string;
  condition: string;
  isExpired: boolean;
}
