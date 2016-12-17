'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import store from './store';
import navbarComponent from './components/navbarComponent';

// Still need to import the store and a component to render to the screen
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={navbarComponent}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('main')
);