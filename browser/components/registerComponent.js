'use strict'

import React from 'react';

export default class SignupComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="register-container">
                <div className="container" id="register-form-container"
                    style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>
                    <div className="form-group row">
                        <label className="col-xs-2 col-form-label">First Name</label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text" placeholder="Kenneth" id="example-text-input" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-xs-2 col-form-label">Last Name</label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text" placeholder="Moy" id="example-text-input" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-xs-2 col-form-label">Email</label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text" placeholder="moykenneth91@gmail.com" id="example-text-input" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-xs-2 col-form-label">School</label>
                        <div className="col-xs-10">
                            <input className="form-control" type="text" placeholder="Brooklyn Technical High School" id="example-text-input" />
                        </div>
                    </div>

                    <button className="btn btn-outline-success float-md-right"type="button">Submit</button>
                </div>
            </div>
        );
    }
}
