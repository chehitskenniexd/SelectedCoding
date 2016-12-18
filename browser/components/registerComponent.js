'use strict'

import React from 'react';
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
    axios.post('/api', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      schoolName: this.state.school
    })
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
                <input className="form-control" type="text" placeholder="Kenneth"
                  onChange={(event) => { this.onHandleChange('firstName', event) } } id="firstName-input" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-xs-2 col-form-label">Last Name</label>
              <div className="col-xs-10">
                <input className="form-control" type="text" placeholder="Moy"
                  onChange={(event) => { this.onHandleChange('lastName', event) } } id="lastName-input" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-xs-2 col-form-label">Email</label>
              <div className="col-xs-10">
                <input className="form-control" type="email" placeholder="moykenneth91@gmail.com"
                  onChange={(event) => { this.onHandleChange('email', event) } } id="email-input" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-xs-2 col-form-label">School</label>
              <div className="col-xs-10">
                <input className="form-control" type="text" placeholder="Brooklyn Technical High School"
                  onChange={(event) => { this.onHandleChange('school', event) } } id="school-input" />
              </div>
            </div>

            <button className="btn btn-outline-warning" onClick={this.onHandleCSVClick}>Load CSV</button>
            <input className="btn btn-outline-success" style={{ float: 'right' }} type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
