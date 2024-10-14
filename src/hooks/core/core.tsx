import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

export const useWanderlustNavigation = () => {
  return useNavigation<NavigationProp<ParamListBase, string, undefined>>();
};
