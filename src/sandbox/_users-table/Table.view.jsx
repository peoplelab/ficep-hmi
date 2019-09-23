//----------------------------------------------------------------------------------------
// File: Table.view.jsx
//
// Desc: Pagina per la gestione degli utenti
// Path: /src/sandbox/_users-table/Table.view
//----------------------------------------------------------------------------------------

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Table extends PureComponent {
	constructor(props) {
    super(props);

    this.setHead = this.setHead.bind(this);
    this.setBody = this.setBody.bind(this);
  }

  setHead() {
    const { headers } = this.props;

    if (headers.length <= 0) {
      return null;
    }

    const TH = headers.map((value, index) => (
      <th key={`table-header-${index}`} className="table__cell table__cell--header">
        {value}
      </th>
    ));

    return (
      <thead className="table__head">
        <tr className="table__row table__row--headers">
          {TH}
        </tr>
      </thead>
    );
  }

  setBody() {
    const { children, data, headers } = this.props;

    let body;
    if (typeof children !== 'function') {
      body = data.map((row, index) => (
        <tr key={`table-row-${index}`} className="table__row">
          {headers.map((cell, index) => (
            <td key={`table-cell-${index}`} className="table__cell">
              {row[cell]}
            </td>
          ))}
        </tr>
      ));
    } else {
      body = data.map((value, index) => children({ value, index }));
    }

    return (
      <tbody className="table__body">
        {body}
      </tbody>
    );
  }

	render() {
    const { className, caption, footer } = this.props;

    const mergedClass = `table ${className}`;

    const Caption = caption && (<caption className="table__caption">{caption}</caption>);

    const Head = this.setHead();
    const Body = this.setBody();
    const Footer = footer && (<tfoot className="table__foot">{footer}</tfoot>);

    return (
      <table className={mergedClass}>
        {Caption}
        {Head}
        {Body}
        {Footer}
      </table>
    );
	}
}


Table.propTypes = {
  children: PropTypes.func,
  className: PropTypes.string,
  caption: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(PropTypes.string),
  footer: PropTypes.func,
};

Table.defaultProps = {
  children: null,
  className: '',
  caption: '',
  data: [],
  headers: [],
  footer: null,
};


export default Table;
