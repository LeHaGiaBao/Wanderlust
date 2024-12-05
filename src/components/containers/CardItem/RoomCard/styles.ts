import {BaseColor, PrimaryColor} from '@/constants';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderRadius: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowColor: '#C9C9C9',
    elevation: 5,
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    margin: 4,
  },
  image: {
    width: 125,
    height: 70,
    borderRadius: 8,
  },
  headerContent: {
    display: 'flex',
    gap: 8,
    width: '50%',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginVertical: 4,
  },
  content: {
    width: '100%',
    display: 'flex',
    gap: 8,
    marginHorizontal: 4,
  },
  voucher: {
    backgroundColor: '#FFD0D0',
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 150,
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 4,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  button: {
    borderRadius: 50,
    backgroundColor: PrimaryColor.Main,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
