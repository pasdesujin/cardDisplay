import React, { Component } from 'react';
import AuthService from '../utils/AuthService';
import Login from '../components/Login';
import Edit from './Edit';

class EditContainer extends Component {
  constructor() {
    super();
    this.auth = new AuthService(
      '***REMOVED***',
      'peranatd.auth0.com',
      (token) => {this.setState({loggedIn: token});}
    );
    this.state = {
      loggedIn: this.auth.loggedIn()
    };
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? <Edit /> : <Login auth={this.auth}/>}
      </div>
    );
  }
}

export default EditContainer;
