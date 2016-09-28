import React, {Component, PropTypes} from 'react';
import {withRouter} from 'react-router';
import {Card, CardTitle, CardText, CardActions, Button, Textfield} from 'react-mdl'

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
        console.log(this.state.username);
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
            <div id="loginWrapper">
                <Card shadow={0} style={{width: '320px', height: '300px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', background: '#3e4eb8 none repeat scroll 0 0'}}>Prijava</CardTitle>
                    <CardText>
                        <Textfield onChange={(e) => {this._handleChange('username', e)}}
                                   label="Email..."
                                   style={{width: '200px'}}/>
                        <Textfield onChange={(e) => {this._handleChange('password', e)}}
                                   label="Lozinka..."
                                   type="password"
                                   style={{width: '200px'}}/>
                    </CardText>
                    <CardActions border>
                        <Button colored
                                onClick={(e) => this._login(e)}>
                            Kreni
                        </Button>
                    </CardActions>
                </Card>
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
