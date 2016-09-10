import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import SvgIcon from 'material-ui/SvgIcon';

const TitleBar = () => (
  <AppBar
    className="title"
    title="Airtouch"
    showMenuIconButton={false}
    style={{'backgroundColor': '#F595B3'}}
  />
);

export default TitleBar;
