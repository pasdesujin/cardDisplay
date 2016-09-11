import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
  icon: {
    'marginBottom': 4
  }
};

const Button = (props) => (
  <div className="subscribe-button">
    <RaisedButton
      href={`tel:${props.url.replace(/#/g, '%23')}`}
      label={props.label}
      labelPosition="after"
      labelColor="#fff"
      backgroundColor="#9ACF56"
      style={style}
    />
  </div>
);

export default Button;
