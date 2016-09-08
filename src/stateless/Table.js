import React from 'react';

const Table = (props) => (
  <div>
    {props.map(entry => {
      return <span>{JSON.stringify(entry)}</span>;
    })}
  </div>
);

export default Table;
