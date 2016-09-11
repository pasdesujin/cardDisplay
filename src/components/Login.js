import React, { PropTypes } from 'react';
import AuthService from '../utils/AuthService';

export class Login extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    auth: PropTypes.instanceOf(AuthService)
  }

  callLogin() {
    if (!this.props.auth.loggedIn()) {
      this.props.auth.login();
    }
  }

  componentDidMount() {
    this.callLogin();
  }

  render() {
    return (
      <div id="login-container"/>
    );
  }
}

export default Login;
