import React, { Component } from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import NavigationArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward';
import NavigationArrowUpward from 'material-ui/svg-icons/navigation/arrow-upward';
import 'whatwg-fetch';

const style = {
  margin: 3
};

class EditCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      changed: false
    };
    this.reload = props.reload;
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      data: newProps.data,
      changed: false
    });
  }

  callFetch(data) {
    return fetch('http://localhost:8128/api/vas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  }


  save() {
    this.callFetch(this.state.data)
    .then(res => {
      if (res.status === 201) {
        this.reload();
        this.setState({changed: false});
      }
    });
  }

  delete() {
    fetch('http://localhost:8128/api/vas', {
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

  moveUp(index) {
    if (index > 0) {
      const a = this.props.allCards.filter(card => card.sort === index)[0];
      const b = this.props.allCards.filter(card => card.sort === index-1)[0];
      this.callFetch(Object.assign({}, a, {sort: index-1}))
      .then(res => {
        if (res.status === 201) {
          return this.callFetch(Object.assign({}, b, {sort: index}));
        }
      }).then(res => {
        if (res.status === 201) {
          this.reload();
        }
      });
    }
  }

  moveDown(index) {
    if (index < this.props.allCards.length - 1) {
      const a = this.props.allCards.filter(card => card.sort === index)[0];
      const b = this.props.allCards.filter(card => card.sort === index+1)[0];
      this.callFetch(Object.assign({}, a, {sort: index+1}))
      .then(res => {
        if (res.status === 201) {
          return this.callFetch(Object.assign({}, b, {sort: index}));
        }
      }).then(res => {
        if (res.status === 201) {
          this.reload();
        }
      });
    }
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
                value={this.state.data.title}
                data-type="title"
                onChange={this.handleChange.bind(this)}
              />
            }
            subtitle={
              <div>
                <TextField
                  floatingLabelText="Subtitle"
                  multiLine={true}
                  value={this.state.data.subtitle}
                  data-type="subtitle"
                  onChange={this.handleChange.bind(this)}
                /><br />
                <TextField
                  floatingLabelText="URL"
                  multiLine={true}
                  value={this.state.data.url}
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
                value={this.state.data.details}
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
                style={style}
              />
              <FlatButton
                label="Delete"
                onClick={this.delete.bind(this)}
                hoverColor='#EF9A9A'
                style={style}
              />
            </div>
            <div className="reorder-buttons">
              <FlatButton
                data-sort={this.props.data.sort}
                icon={<NavigationArrowUpward color="#212121"/>}
                style={style}
                onClick={() => this.moveUp(this.props.data.sort)}
              />
              <FlatButton
                data-sort={this.props.data.sort}
                icon={<NavigationArrowDownward color="#212121"/>}
                style={style}
                onClick={() => this.moveDown(this.props.data.sort)}
              />
            </div>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default EditCard;
