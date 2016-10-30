import {Component, PropTypes} from 'react';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

class UndecoratedLoginRequired extends Component {

    componentWillMount() {
        if (!this.props.loggedIn) {
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
    children: PropTypes.any,
    loggedIn: PropTypes.bool
};

function mapStateToProps(state) {
    return {
        loggedIn: state.session.loggedIn
    };
}

var LoginRequired = withRouter(connect(mapStateToProps)(UndecoratedLoginRequired));

export default LoginRequired;