import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import TabsLayout from './components/tabsLayout/tabsLayout';
import Login from './components/login/login';
import LoginRequired from './components/login/loginRequired';
import store from './redux/store';

const router = (
    <Router history={browserHistory} >
        <Route path='/login' component={Login} />
        <Route component={LoginRequired} >
            <Route path="/" component={TabsLayout} />
        </Route>
    </Router>
);

const app = (
    <Provider store={store} >
        {router}
    </Provider>
);

render(
    app,
    document.getElementById('app')
);
