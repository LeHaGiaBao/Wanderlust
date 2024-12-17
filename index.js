/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import '@/translations/i18n';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from 'react-native-reanimated';
//import '@react-native-firebase/app';
//import firestore from '@react-native-firebase/firestore';
//import functions from '@react-native-firebase/functions';

// if (__DEV__) {
//   firestore().useEmulator('localhost', 8080);
//   functions().useEmulator('localhost', 5001);
// }

configureReanimatedLogger({
  level: ReanimatedLogLevel.warn,
  strict: false,
});

AppRegistry.registerComponent(appName, () => App);
