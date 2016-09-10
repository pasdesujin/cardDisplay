import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import Button from './Button';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import 'whatwg-fetch';

class EditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      changed: false
    };
    this.reload = props.reload;
  }

  save() {
    fetch('/api/vas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.data)
    }).then(res => {
      if (res.status === 201) {
        this.reload();
        this.setState({changed: false});
      }
    });
  }

  delete() {
    fetch('/api/vas', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.data)
    }).then(res => {
      if (res.status === 200) {
        this.reload();
      }
    });
  }

  handleChange(e) {
    const change = {};
    change[e.target.getAttribute('data-type')] = e.target.value;
    this.setState({
      data: Object.assign({}, this.state.data, change),
      changed: true
    });
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
                data-type="title"
                onChange={this.handleChange.bind(this)}
              />
            }
            subtitle={
              <div>
                <TextField
                  floatingLabelText="Subtitle"
                  multiLine={true}
                  defaultValue={this.props.data.subtitle}
                  data-type="subtitle"
                  onChange={this.handleChange.bind(this)}
                /><br />
                <TextField
                  floatingLabelText="URL"
                  multiLine={true}
                  defaultValue={this.props.data.url}
                  data-type="url"
                  onChange={this.handleChange.bind(this)}
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
                data-type="details"
                onChange={this.handleChange.bind(this)}
              />}
          </CardText>
          <CardActions>
            <div className="save-cancel-buttons">
              <FlatButton
                label="Save"
                onClick={this.save.bind(this)}
                backgroundColor={this.state.changed ? '#FFE082' : ''}
                hoverColor={this.state.changed ? '#C5E1A5' : ''}
              />
              <FlatButton
                label="Delete"
                onClick={this.delete.bind(this)}
                hoverColor='#EF9A9A'
              />
            </div>
          </CardActions>
        </Card>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default EditCard;
