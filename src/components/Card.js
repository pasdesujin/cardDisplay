import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Button from './Button';

const VasCard = (props) => (
  <div className="card-container">
    <Card>
      <CardTitle
        title={props.data.title}
        subtitle={props.data.subtitle}
      />
      <CardText>
         {JSON.stringify(props)}
         {props.data.details}
      </CardText>
      <CardActions>
        <Button
          label={`Dial ${props.data.url} or click here`}
          url={props.data.url}
        />
      </CardActions>
    </Card>
  </div>
);

export default VasCard;
