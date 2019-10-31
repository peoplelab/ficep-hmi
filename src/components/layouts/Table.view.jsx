//----------------------------------------------------------------------------------------
// File: Table.view.jsx
//
// Desc: Pagina per la gestione degli utenti
// Path: /src/sandbox/_users-table/Table.view
//----------------------------------------------------------------------------------------

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import '../../styles/layouts/Table.style.scss';


class Table extends PureComponent {
	constructor(props) {
	super(props);

	this.mapHead = this.mapHead.bind(this);
	this.mapBody = this.mapBody.bind(this);
	}



	mapHead() {
	const { headers  } = this.props;
	const { settings } = this.props;

	const cells = Object.keys(headers).map((value, index) => (
	//	<th className={`table__cell table__cell--header ${settings[index]}`} key={`cell-head-${index}`}>{headers[value]}</th>
		<th className={`cell-head ${settings[index]}`} key={`cell-head-${index}`}>{headers[value]}</th>
	));

	return (
		<tr className="table__row" >{cells}</tr>
	);
	}



	mapBody(row, id) {
	const { children, headers } = this.props;

	let cells;
	if (typeof children === 'function') {
		cells = children({ value: row, index: id });
	} else {
		cells = Object.keys(headers).map((value, index) => (
		<td className="table__cell" key={`cell-body-${index}`}>{value}</td>
		));
	}

	return(<tr key={`row-body-${id}`} className="table__row" >{cells}</tr>);
	}

	render() {
	const { className, data, headers } = this.props;

	const mergedClass = `table ${className}`;

	return (
		<div className={mergedClass}>
		{headers && (
			<div className="table__head">
			<table className="table__main margin-t-20">
				<thead>
				{this.mapHead()}
				</thead>
			</table>
			</div>
		)}
		<div className="table__body">
			<table className="table__main">
			<tbody>
				{data.map(this.mapBody)}
			</tbody>
			</table>
		</div>
		{/* <div className="table__foot">
			<table className="table__main">
			<tfoot>

			</tfoot>
			</table>
		</div> */}
		</div>
	);
	}
}


Table.propTypes = {
	children : PropTypes.func,
	className: PropTypes.string,
	data     : PropTypes.arrayOf(PropTypes.object),
	headers  : PropTypes.objectOf(PropTypes.string),
	settings : PropTypes.objectOf(PropTypes.string),
};

Table.defaultProps = {
	children: null,
	className: '',
	// caption: null, // fix for incompatibility between tables and empty strings
	data: [],
	headers: null,
	// footer: null,
};


export default Table;
