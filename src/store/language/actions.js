import i18n from '../../libraries/translate';
import { setLanguage } from './reducer';

export const changeLanguageAction = (language) => (dispatch) => {
  dispatch(setLanguage(language));
  i18n.changeLanguage(language);
};
