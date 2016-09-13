import React, { Component } from 'react';
import AuthService from '../utils/AuthService';
import Login from '../components/Login';
import Edit from './Edit';
import TitleBar from '../components/TitleBar';

const client_id = process.env.REACT_APP_CLIENT_ID ?
  process.env.REACT_APP_CLIENT_ID : require('../../auth0Config').CLIENT_ID;
const domain = process.env.REACT_APP_DOMAIN ?
  process.env.REACT_APP_DOMAIN : require('../../auth0Config').DOMAIN;

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
      client_id,
      domain,
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
