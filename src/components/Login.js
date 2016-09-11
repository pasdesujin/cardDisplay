import React, { PropTypes } from 'react';
import AuthService from '../utils/AuthService';

export class Login extends React.Component {
  static propTypes = {
    location: PropTypes.object,
    auth: PropTypes.instanceOf(AuthService)
  }

  componentDidMount() {
    if (!this.props.auth.loggedIn()) {
      this.props.auth.login();
    }
  }

  render() {
    return (
      <div id="login-container"/>
    );
  }
}

export default Login;
