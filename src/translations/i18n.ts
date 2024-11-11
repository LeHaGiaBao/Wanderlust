import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as resources from './resources';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  supportedLngs: ['en'],
  compatibilityJSON: 'v3',
  resources,
});

const translate = (key: string, options?: any) => i18n.t(key, options) as any;

export default translate;
