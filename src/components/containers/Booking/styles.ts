import {BaseColor} from '@/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: BaseColor.White,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerContent: {
    display: 'flex',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginVertical: 16,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
