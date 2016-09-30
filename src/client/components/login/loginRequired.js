import {Component, PropTypes} from 'react';
import {withRouter} from 'react-router';

class UndecoratedLoginRequired extends Component {
    constructor() {
        super();

        this._onChange = this._onChange.bind(this);
        this.state = {
            loggedIn: false
        }
    }

    _onChange() {
        var loggedIn = !this.state.loggedIn;
        if (!loggedIn) {
            this.props.router.push('/login');
        } else {
            this.setState({loggedIn: !this.state.loggedIn});
        }
    }

    componentWillMount() {
    //sessionStore.addChangeListener(this._onChange);

    if (!this.state.loggedIn) {
      //sessionActions.setLocation(this.props.location.pathname);
      this.props.router.push('/login');
    }
  }

    render() {
        return (
            this.props.children
        );
    }
}

UndecoratedLoginRequired.propTypes = {
    router: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    location: PropTypes.object,
    children: PropTypes.any
};

var LoginRequired = withRouter(UndecoratedLoginRequired);

export default LoginRequired;