'use strict'

import React from 'react';
import axios from 'axios';

export default class showRegisteredComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registered: null,
    }
  }

  componentWillMount() {
    // get the registered users, then get the correct bounce types
    axios.get('/api/registered')
      .then(res => {
        this.setState({ registered: res.data });
      })
      .then()
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.registered);
    return (
      <div>
        {
          this.state.registered
            ?
            <div id="show-container">
              <table className="table" id="registered-table">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>School</th>
                    <th>Contacted</th>
                    <th>Bounce</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.registered.map(registered => {
                      return (<tr>
                        <td>{registered.firstName}</td>
                        <td>{registered.lastName}</td>
                        <td>{registered.email}</td>
                        <td>{registered.schoolName}</td>
                        <td>{registered.contactedOn
                          ? new Date(registered.contactedOn).toLocaleString()
                          : ''}</td>
                        <td>{registered.bounceType}</td>
                      </tr>);
                    })
                  }
                </tbody>
              </table>
            </div>

            : <div>
              <progress class="progress progress-striped progress-danger" value="100" max="100"></progress>
            </div>
        }
      </div>
    )
  };
}