import React, {Component, PropTypes} from 'react';
import {withRouter} from 'react-router';

class UndecoratedLogin extends Component {
    constructor() {
        super();

        this._login = this._login.bind(this);
        this._onChange = this._onChange.bind(this);
        this._handleChange = this._handleChange.bind(this);
        this._handleKeyPress = this._handleKeyPress.bind(this);

        this.state = {
            username: '',
            password: ''
        };
    }

    _onChange() {
    }

    _login(e) {
        e.preventDefault();
        var safeUsername = this.state.username.trim();
        if (safeUsername.indexOf('@') > -1) {
            safeUsername = safeUsername.split('@')[0];
        }
        console.log(safeUsername);
    }

    _handleKeyPress(event) {
        if (event.key == 'Enter') {
            this._login(event);
        }
    }

    _handleChange(name, e) {
        let change = {};
        change[name] = e.target.value;
        this.setState(change);
    }


    render() {

        return (
            <div className="login-wrapper">
                <div className="form-wrapper">
                    <form role="form" onSubmit={(e) => this._login(e)}>
                        <div className="form-group">
                            <div className="control-input">
                                <input
                                    type="email"
                                    className="form-control mit-input"
                                    id="inputUsername"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={(e) => this._handleChange('username', e)}
                                    onKeyPress={(e) => this._handleKeyPress(e)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="control-input">
                                <input
                                    type="password"
                                    className="form-control mit-input"
                                    id="inputPassword"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={(e) => this._handleChange('password', e)}
                                    onKeyPress={(e) => this._handleKeyPress(e)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <input
                                value="Login"
                                className="btn-login mit-button"
                                type="submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

UndecoratedLogin.propTypes = {
    router: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

var Login = withRouter(UndecoratedLogin);

export default Login;
