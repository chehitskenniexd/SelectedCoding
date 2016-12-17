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
    axios.get('/api/registered')
      .then(res => {
        this.setState({ registered: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>Hello!
                {
          this.state.registered
            ? ''
            : ''
        }
      </div>
    )
  };
}