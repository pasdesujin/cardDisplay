import Auth0Lock from 'auth0-lock';
import logo from '../logo.svg';

const options = {
  container: 'login-container',
  theme: {
    logo: logo,
    primaryColor: '#A4D560'
  },
  autoclose: true
};

export default class AuthService {
  constructor(clientId, domain, authCallback) {
    this.lock = new Auth0Lock(clientId, domain, options);
    this.lock.on('authenticated', this._doAuthentication.bind(this));
    this.login = this.login.bind(this);
    this.authCallback = authCallback;
  }

  _doAuthentication(authResult) {
    this.setToken(authResult.idToken);
    this.authCallback(authResult.idToken);
  }

  login() {
    this.lock.show();
  }

  loggedIn() {
    return !!this.getToken();
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken);
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  logout() {
    localStorage.removeItem('id_token');
  }

}
