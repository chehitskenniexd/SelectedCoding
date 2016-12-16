'use strict'

import React from 'react';
import { Router, browserHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

// Still need to import the store and a component to render to the screen
render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('main')
);