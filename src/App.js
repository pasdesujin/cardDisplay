import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TitleBar from './components/TitleBar';
import './App.css';
import Main from './containers/Main';
import Edit from './containers/Edit';

injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <TitleBar />
          <Router history={browserHistory}>
            <Route path="/" component={Main} />
            <Route path="edit" component={Edit} />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
