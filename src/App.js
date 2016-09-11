import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './Routes';
import './App.css';

injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
