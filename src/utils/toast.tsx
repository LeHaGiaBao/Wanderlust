import {FontFamily, FontSize, StatusColor} from '@/constants';
import React from 'react';
import {StyleSheet} from 'react-native';
import {BaseToast, ErrorToast} from 'react-native-toast-message';

export const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={styles.successStyle}
      contentContainerStyle={styles.successContainerStyle}
      text1Style={styles.successText1Style}
      text2Style={styles.successText2Style}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={styles.errorStyle}
      contentContainerStyle={styles.errorContainerStyle}
      text1Style={styles.errorText1Style}
      text2Style={styles.errorText2Style}
    />
  ),
};

const styles = StyleSheet.create({
  successStyle: {
    borderLeftColor: StatusColor.Success,
  },
  successContainerStyle: {
    paddingHorizontal: 15,
  },
  successText1Style: {
    fontFamily: FontFamily.FontMedium,
    fontSize: FontSize.FontSize16,
    fontWeight: 'bold',
  },
  successText2Style: {
    fontFamily: FontFamily.FontMedium,
    fontSize: FontSize.FontSize12,
    fontWeight: 'medium',
  },
  errorStyle: {
    borderLeftColor: StatusColor.Error,
  },
  errorContainerStyle: {
    paddingHorizontal: 15,
  },
  errorText1Style: {
    fontFamily: FontFamily.FontMedium,
    fontSize: FontSize.FontSize16,
    fontWeight: 'bold',
  },
  errorText2Style: {
    fontFamily: FontFamily.FontMedium,
    fontSize: FontSize.FontSize12,
    fontWeight: 'medium',
  },
});
