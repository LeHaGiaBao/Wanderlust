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
  enterProfileContainer: {
    marginTop: 35,
    marginBottom: 33,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
