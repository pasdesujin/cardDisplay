import React, { Component } from 'react';
import EditCard from '../components/EditCard';
import 'whatwg-fetch';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8128/api/vas')
    .then(res => {
      return res.text();
    }).then(body => {
      console.log(body);
      this.setState({
        cards: JSON.parse(body).sort((a, b) => a.sort > b.sort)
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state)}
        {this.state.cards.map((card, i) =>
          <EditCard key={i} data={card} />
        )}
      </div>
    );
  }
}

export default Edit;
