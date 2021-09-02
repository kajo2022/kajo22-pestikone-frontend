
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json'

let resources = { 
en: { translation: en },
};

i18n
  .use(initReactI18next)
  .init({
    initImmediate: false,
    lng: navigator.language,
    fallbackLng: 'fi',
    resources: resources
  });


export default i18n;