import React, { Component } from 'react';
import EditCard from '../components/EditCard';
import FlatButton from 'material-ui/FlatButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import 'whatwg-fetch';

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
  }

  loadData() {
    fetch('http://localhost:8128/api/vas')
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

  componentDidMount() {
    this.loadData();
  }

  addCard() {
    fetch('http://localhost:8128/api/vas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({sort: this.state.cards.length})
    }).then(r => {
      if (r.status === 201) {
        this.loadData();
      }
    });
  }

  render() {
    return (
      <div>
        {this.state.cards.map((card, i) => {
          card.sort = i;
          return (<EditCard
            key={i}
            data={card}
            reload={this.loadData.bind(this)}
            allCards={this.state.cards}
          />);
        })}
        <FlatButton
          backgroundColor='#9ACF56'
          hoverColor='#AED978'
          icon={<ContentAdd color="#fff"/>}
          onClick={this.addCard.bind(this)}
        />
      </div>
    );
  }
}

export default Edit;
