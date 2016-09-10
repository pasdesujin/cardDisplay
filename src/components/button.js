import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle';

const style = {
  margin: 12,
  icon: {
    'marginBottom': 4
  }
};

const Button = (props) => (
  <div className="subscribe-button">
    <RaisedButton
      href={`tel:${props.url}`}
      label={props.label}
      labelPosition="after"
      labelColor="#fff"
      icon={<ActionCheckCircle color="#fff" style={style.icon}/>}
      backgroundColor="#a4c639"
      style={style}
    />
  </div>
);

export default Button;
