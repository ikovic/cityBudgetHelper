import {Component, PropTypes} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';
import actions from '../../redux/actions';

class UndecoratedLoginRequired extends Component {

  componentWillMount() {
    let loginData = sessionStorage.getItem('budget-session');
    if (loginData) {
      let storedState = JSON.parse(loginData);
      this.props.logIn(storedState.user, storedState.token);
    } else if (!this.props.loggedIn) {
      this.props.router.push('/login');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.router.push('/login');
    }
  }

  render() {
    if (this.props.loggedIn) {
      return (
        this.props.children
      );
    } else {
      return null;
    }
  }
}

UndecoratedLoginRequired.propTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  location: PropTypes.object,
  children: PropTypes.any,
  loggedIn: PropTypes.bool
};

function mapStateToProps(state) {
  return {
    loggedIn: state.session.loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  return ({
    logIn: (user, token) => dispatch(actions.logIn(user, token))
  });
}

const LoginRequired = withRouter(connect(mapStateToProps, mapDispatchToProps)(UndecoratedLoginRequired));

export default LoginRequired;
