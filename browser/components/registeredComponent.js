'use strict'

import React from 'react';
import { browserHistory } from 'react-router';

export default (props) => {
    return (
        <div>
            <div className="container container-btn" style={{ paddingTop: '5vh' }}>
                <button className="btn btn-outline-warning"
                    onClick={() => { browserHistory.push('/') } }> Return Home</button>
            </div>
            <div className="container container-thanks" style={{ paddingTop: '5vh' }}>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container" style={{ textAlign: 'center' }}>
                        <h1 className="display-3">Thank You!</h1>
                        <p className="lead">Thanks for registering with Selected!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
