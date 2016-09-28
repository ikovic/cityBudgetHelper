import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import TabsLayout from './components/tabsLayout/tabsLayout';
import Login from './components/login/login';
import LoginRequired from './components/login/loginRequired';

const router = (
    <Router history={browserHistory}>
        <Route path='/login' component={Login}/>
        <Route component={LoginRequired}>
            <Route path="/" component={TabsLayout}/>
        </Route>
    </Router>
);

render(
    router,
    document.getElementById('app')
);
