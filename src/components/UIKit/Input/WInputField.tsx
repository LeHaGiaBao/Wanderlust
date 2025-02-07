import React, {memo, useCallback, useState} from 'react';
import {InputFieldsProps} from '@/@types/styles';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {BaseColor, FontFamily, FontSize, PrimaryColor} from '@/constants';
import {Eye, EyeSlash} from 'iconsax-react-native';
import WText from '../Text/WText';

function WInputFields(props: InputFieldsProps) {
  const {
    text,
    placeholder,
    notification,
    isError = false,
    icon,
    inputStyles,
    onPress,
    onLongPress,
    type,
    iconAlign,
    border = true,
    borderRadius = 8,
    isNotification = true,
    value,
    onChangeText,
    ...rest
  } = props;
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(type === 'Password');

  let borderColor = BaseColor.Gray;

  if (focus) {
    borderColor = PrimaryColor.Main;
  }

  const handleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <TouchableOpacity
      style={[inputStyles, styles.input, type === 'OTP' && styles.otpContainer]}
      onPress={onPress}
      onLongPress={onLongPress}>
      {text && <WText text={text || ''} typo="Label" color="DarkGray" />}
      <TouchableOpacity
        style={[
          styles.inputContainer,
          {
            borderColor: border ? borderColor : BaseColor.White,
            borderRadius: borderRadius,
          },
        ]}>
        {type === 'Text' && iconAlign === 'Left' && icon}
        <TextInput
          autoCapitalize="none"
          value={value}
          onChangeText={onChangeText}
          style={styles.placeholderText}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          secureTextEntry={showPassword}
          placeholder={placeholder}
          placeholderTextColor={BaseColor.DarkGray}
          {...rest}
        />
        {type === 'Text' && iconAlign === 'Right' && icon}
        {type === 'Password' && (
          <TouchableOpacity onPress={handleShowPassword}>
            {showPassword ? (
              <EyeSlash size={16} color={BaseColor.DarkGray} />
            ) : (
              <Eye size={16} color={BaseColor.DarkGray} />
            )}
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      {isNotification && (
        <WText
          text={notification || ''}
          typo="Label"
          color={isError ? 'Error' : 'DarkGray'}
        />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  input: {
    display: 'flex',
    gap: 4,
    width: '100%',
  },
  inputContainer: {
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  placeholderText: {
    height: 40,
    width: '90%',
    fontFamily: FontFamily.FontMedium,
    fontSize: FontSize.FontSize14,
    color: BaseColor.Black,
  },
  otpContainer: {
    width: 44,
    height: 44,
  },
});

export default memo(WInputFields);
