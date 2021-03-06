import React, { Component } from 'react';
import VasCard from '../components/Card';
import TitleBar from '../components/TitleBar';
import 'whatwg-fetch';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  componentDidMount() {
    fetch('/api/vas')
    .then(res => {
      return res.text();
    }).then(body => {
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
        <TitleBar />
        {this.state.cards.map((card, i) =>
          <VasCard key={i} data={card} />
        )}
      </div>
    );
  }
}

export default Main;
