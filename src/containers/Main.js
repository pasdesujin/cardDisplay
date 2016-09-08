import React, { Component } from 'react';
import Table from '../components/Table';
import 'whatwg-fetch';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [1, 2, 3]
    };
  }

  componentDidMount() {
    fetch('http://localhost:8128/api/vas')
    .then(res => {
      return res.text();
    }).then(body => {
      console.log(body);
      this.setState({
        table: JSON.parse(body)
      });
    }).catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        {this.state.table.map((table, i) =>
          <Table key={i} data={table} />
        )}
      </div>
    );
  }
}

export default Main;
