import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import i18n from '../../util/i18n';

const Translation = ({translationKey}) => {
  return <span>{i18n.getTranslation(translationKey)}</span>
};

Translation.propTypes = {
  translationKey: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    translation: state.translation
  };
}

export default connect(mapStateToProps)(Translation);
