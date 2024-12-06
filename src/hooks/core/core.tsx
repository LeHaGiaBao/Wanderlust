import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

export const useWanderlustNavigation = () => {
  return useNavigation<NavigationProp<ParamListBase, string, undefined>>();
};

export const useWanderlustNavigationParams = () => {
  const route = useRoute();
  return route.params;
};
