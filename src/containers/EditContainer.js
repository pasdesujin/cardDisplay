import React, { Component } from 'react';
import AuthService from '../utils/AuthService';
import Login from '../components/Login';
import Edit from './Edit';
import TitleBar from '../components/TitleBar';
import 'whatwg-fetch';

class EditContainer extends Component {
  constructor() {
    super();
    this.makeLock();
    this.state = {
      loggedIn: this.auth.loggedIn()
    };
  }

  makeLock() {
    this.auth = new AuthService(
      '***REMOVED***',
      'peranatd.auth0.com',
      () => {this.setState({loggedIn: this.auth.loggedIn()});}
    );
  }

  logout() {
    this.auth.logout();
    this.makeLock();
    this.setState({loggedIn: this.auth.loggedIn()});
  }

  render() {
    return (
      <div>
        <TitleBar auth={this.auth} logout={this.logout.bind(this)}/>
        {this.state.loggedIn ?
          <Edit /> :
          <Login auth={this.auth}/>
        }
      </div>
    );
  }
}

export default EditContainer;
