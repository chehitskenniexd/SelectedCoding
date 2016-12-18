'use strict'

import React from 'react';
import {browserHistory} from 'react-router';
import axios from 'axios';

export default class SignupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      school: ''
    }
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onHandleCSVClick = this.onHandleCSVClick.bind(this);
  }

  onHandleSubmit(event) {
    event.preventDefault();
    console.log('submit');
    // axios.post('/api', {
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //   email: this.state.email,
    //   schoolName: this.state.school
    // })
    event.target.reset();
    browserHistory.push('/thanks');
  }

  onHandleChange(prop, event) {
    this.setState({ [prop]: event.target.value });
  }

  onHandleCSVClick(event) {
    axios.post('/api/loadCSV')
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div id="register-container">
        <form className="form-register" role="form" onSubmit={(event) => { this.onHandleSubmit(event) } }>
          <div className="container" id="register-form-container"
            style={{ paddingTop: '5vh', paddingBottom: '5vh' }}>

            <h3 style={{ textAlign: 'center', paddingBottom: '5vh' }}>Register for the Selected mailing list!</h3>

            <div className="form-group row">
              <label className="col-xs-2 col-form-label">First Name</label>
              <div className="col-xs-10">
                <input className="form-control" type="text" placeholder="First Name"
                  onChange={(event) => { this.onHandleChange('firstName', event) } } id="firstName-input" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-xs-2 col-form-label">Last Name</label>
              <div className="col-xs-10">
                <input className="form-control" type="text" placeholder="Last Name"
                  onChange={(event) => { this.onHandleChange('lastName', event) } } id="lastName-input" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-xs-2 col-form-label">Email</label>
              <div className="col-xs-10">
                <input className="form-control" type="email" placeholder="email@domain.com"
                  onChange={(event) => { this.onHandleChange('email', event) } } id="email-input" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-xs-2 col-form-label">School</label>
              <div className="col-xs-10">
                <input className="form-control" type="text" placeholder="School Name"
                  onChange={(event) => { this.onHandleChange('school', event) } } id="school-input" />
              </div>
            </div>

            <input className="btn btn-outline-success" style={{ float: 'right' }} type="submit" value="Submit" />
          </div>
        </form>
        <div className="container">
          <button className="btn btn-outline-warning" style={{ float: 'right' }} onClick={this.onHandleCSVClick}>Load CSV</button>
        </div>
      </div>
    );
  }
}
