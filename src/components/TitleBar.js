import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const TitleBar = (props) => (
  <AppBar
    className="title"
    title="Airtouch"
    showMenuIconButton={false}
    iconElementRight={
      props.auth ? ( props.auth.loggedIn() ? <FlatButton label="Logout" onClick={props.logout}/> : false ) : false
    }
    style={{'backgroundColor': '#F595B3'}}
  />
);

export default TitleBar;
