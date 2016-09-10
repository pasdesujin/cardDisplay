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

  loadData () {
    fetch('/api/vas')
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

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state)}
        {this.state.cards.map((card, i) =>
          <EditCard key={i} data={card} reload={this.loadData.bind(this)}/>
        )}
      </div>
    );
  }
}

export default Edit;
