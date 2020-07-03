import RNLanguages from 'react-native-languages';
import i18n from 'i18n-js';
// Import all locales
import en from '../locales/en';
i18n.locale = RNLanguages.language;
// Should the app fallback to English if user locale doesn't exists
i18n.fallbacks = true;
// console.log('RNLanguages', RNLanguages.language);
// Define the supported translations
i18n.translations = {
  en,
};
// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return i18n.t(name, params);
}
export default i18n;
