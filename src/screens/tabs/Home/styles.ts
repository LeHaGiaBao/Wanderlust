import {BaseColor, Devices} from '@/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  homeScreen: {
    paddingTop: 77,
    paddingHorizontal: 16,
    display: 'flex',
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
});
