import {BaseColor, PrimaryColor} from '@/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 80,
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContent: {
    alignSelf: 'flex-end',
  },
  button: {
    marginVertical: 40,
  },
  orContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  divider: {
    width: 85,
    height: 1,
    backgroundColor: BaseColor.Gray,
  },
  socialSignIn: {
    marginTop: 24,
    marginBottom: 42,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  socialIcon: {
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
    shadowOffset: {width: 0, height: 8},
    shadowColor: PrimaryColor.Main,
    shadowOpacity: 0.25,
  },
  signUpContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
});
