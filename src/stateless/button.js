import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';

const style = {
  margin: 12,
  icon: {
    'margin-bottom': 4
  }
};

const RaisedButtonExampleIcon = (props) => (
  <div>
    <RaisedButton
      href={props.url}
      label="สมัคร"
      labelPosition="before"
      labelColor="#fff"
      icon={<ActionCheckCircle color="#fff" style={style.icon}/>}
      backgroundColor="#a4c639"
      style={style}
    />
  </div>
);

export default RaisedButtonExampleIcon;
