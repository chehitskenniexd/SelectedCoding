'use strict'

import React from 'react';

export default (props) => {
    return (
        <div id="navbar-container">
            <nav className="navbar navbar-light" style={{ 'backgroundColor': '#F48020' }}>
                <a className="navbar-brand" href="/">Selected</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.getselected.co/">Selected Site</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/registered" >Show Registered</a>
                    </li>
                    <li className="nav-item float-md-right">
                        <a className="nav-link" href="/">Sign Up</a>
                    </li>
                    <li className="nav-item float-md-right">
                        <a className="nav-link" href="/">Login</a>
                    </li>
                </ul>
            </nav>
            {props.children}
        </div>
    );
}