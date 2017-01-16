import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Translation {



  render() {

  }
}

Translation.propTypes = {
  translationKey: PropTypes.string.isRequired,
  translation: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    translation: state.translation
  };
}

export default connect(mapStateToProps)(Translation);
