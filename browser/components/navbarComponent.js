'use strict'

import React from 'react';

export default (props) => {
    return (
        <div id="navbar-container">
            <nav className="navbar navbar-light" style={{ 'backgroundColor': '#F48020' }}>
                <a className="navbar-brand" href="/">Navbar</a>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="https://www.getselected.co/">Selected</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="http://example.com" id="supportedContentDropdown"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="supportedContentDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
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