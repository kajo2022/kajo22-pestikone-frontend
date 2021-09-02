
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json'
import se from './se.json'

let resources = { 
en: { translation: en },
se: {translation: se}
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