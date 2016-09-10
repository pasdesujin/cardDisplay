import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Button from './Button';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class EditCard extends Component {
  constructor(props) {
    super(props);
    this.state = props.data;
  }

  render() {
    return (
      <div className="card-container">
        <Card>
          <CardTitle
            title={
              <TextField
                floatingLabelText="Title"
                multiLine={true}
                defaultValue={this.props.data.title}
                onChange={(e) => this.setState({title: e.target.value})}
              />
            }
            subtitle={
              <div>
                <TextField
                  floatingLabelText="Subtitle"
                  multiLine={true}
                  defaultValue={this.props.data.subtitle}
                  onChange={(e) => this.setState({subtitle: e.target.value})}
                /><br />
                <TextField
                  floatingLabelText="URL"
                  multiLine={true}
                  defaultValue={this.props.data.url}
                  onChange={(e) => this.setState({url: e.target.value})}
                />
              </div>
            }
          />
          <CardText>
             {<TextField
                floatingLabelText="Details"
                multiLine={true}
                fullWidth={true}
                defaultValue={this.props.data.details}
                onChange={(e) => this.setState({details: e.target.value})}
              />}
          </CardText>
          <CardActions>
            <div className="save-cancel-buttons">
              <FlatButton label="Save"/>
              <FlatButton label="Cancel"/>
            </div>
          </CardActions>
        </Card>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default EditCard;
