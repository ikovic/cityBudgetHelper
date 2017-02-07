import i18next from 'i18next';
import translations from '../translations/translations';

export default class I18n {
  static init(config) {
    let options = Object.assign({
      lng: 'hr',
      resources: translations
    }, config);
    i18next.init(options);
  }

  static getTranslation(key) {
    return i18next.t(key);
  }

  static changeLanguage(language, callback) {
    i18next.changeLanguage(language, callback);
  }

}
