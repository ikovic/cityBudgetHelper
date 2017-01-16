import constants from '../constants';

function setLanguage(state, data) {
  return Object.assign({}, state, {
    language: data.language
  });
}

function translationReducer(state = {}, action) {
  switch (action.type) {
    case constants.SET_LANGUAGE:
      return setLanguage(state, action.data);

    default:
      return state;
  }
}

export default translationReducer;
