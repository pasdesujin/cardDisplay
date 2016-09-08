import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Button from './components/button';
import './App.css';
import Main from './containers/Main';

injectTapEventPlugin();
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Button url="tel:*777*9030*992785#" />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
