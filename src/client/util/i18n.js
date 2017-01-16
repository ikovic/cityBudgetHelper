import i18next from 'i18next';
import translations from '../translations/translations';

export default class I18n {
  static init(config) {
    let options = Object.assign({
      lng: 'en',
      resources: translations
    }, config);
    i18next.init(options);
  }

  static getTranslation(key) {
    return i18next.t(key);
  }

  // TODO: use redux middleware to change language setting
  // https://github.com/reactjs/react-redux/issues/361
}
