import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en_GB';
import srTranslation from '../locales/sr_SR';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation
    },
    sr: {
      translation: srTranslation
    }
  },
  lng: 'sr', // Set the default language
  fallbackLng: 'sr', // Fallback language in case of missing translations
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
