import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Button from './Button';


const TableContainer = (props) => (
  <div className="table-container">
    {JSON.stringify(props.data)}
    <Table>
      <TableHeader
        adjustForCheckbox={false}
        displaySelectAll={false}
      >
        <TableRow>
          <TableHeaderColumn
            style={{textAlign: 'center', fontSize: '19px'}}
            colSpan={props.data.headers.length}
          >
            {props.data.tableName}
          </TableHeaderColumn>
        </TableRow>
        <TableRow>
          {props.data.headers.map((header, index) =>
            <TableHeaderColumn key={index}>{header}</TableHeaderColumn>
          )}
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={false}
        showRowHover={true}
      >
        {props.data.entries.map((row, index) => {
          return (
            <TableRow key={index}>
              {props.data.headers.map((header, index) =>
                <TableRowColumn key={index}>
                  {row[header]}
                  {header === row._button ? <Button url={row[header]}/> : null}
                </TableRowColumn>
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </div>
);

export default TableContainer;
