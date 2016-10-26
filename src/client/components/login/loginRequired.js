import {Component, PropTypes} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

class UndecoratedLoginRequired extends Component {
    constructor() {
        super();
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        var loggedIn = !this.props.loggedIn;
        if (!loggedIn) {
            this.props.router.push('/login');
        }
    }

    componentWillMount() {
        //sessionStore.addChangeListener(this._onChange);

        if (!this.props.loggedIn) {
            this.props.router.push('/login');
        }
    }

    render() {
        console.log(this.props);
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

function mapStateToProps(state) {
    return {
        isLoggedIn: state.loggedIn
    };
}

var LoginRequired = withRouter(connect(mapStateToProps)(UndecoratedLoginRequired));

export default LoginRequired;