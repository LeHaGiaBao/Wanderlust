import {BaseColor, Devices, PrimaryColor} from '@/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: BaseColor.White,
    position: 'relative',
  },
  imageBackground: {
    height: Devices.height,
    width: Devices.width,
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textContainer: {
    paddingTop: 100,
    display: 'flex',
    gap: 2,
  },
  buttonContainer: {
    paddingBottom: 40,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  paginationContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  paginationActive: {
    height: 4,
    width: 36,
    backgroundColor: PrimaryColor.Main,
    borderRadius: 20,
  },
  paginationInActive: {
    height: 4,
    width: 20,
    backgroundColor: BaseColor.Gray,
    borderRadius: 20,
  },
});
