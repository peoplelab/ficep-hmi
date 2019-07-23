import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../../components/layouts/Box/Box.index';


const MainHeader = (
  <tr>
    <th>id</th>
    <th>type</th>
    <th>code</th>
    <th>diameter</th>
    <th>display name</th>
  </tr>
);

const AttributesHeader = (
  <tr>
    <th>id</th>
    <th>code</th>
    <th>display name</th>
    <th>value</th>
  </tr>
);


class DetailsItem extends PureComponent {
	constructor(props) {
    super(props);

    this.setAttributesTable = this.setAttributesTable.bind(this);
    this.setMainTable = this.setMainTable.bind(this);
  }

  setAttributesTable(data) {
    const {
      id,
      code,
      displayName,
      value,
    } = data;


    return (
    <tr key={`tool-detail-${id}`}>
      <td>
        {id}
      </td>
      <td>
        {code}
      </td>
      <td>
        {displayName}
      </td>
      <td>
        {value}
      </td>
    </tr>
    );
  }

  setMainTable() {
    const {
      id,
      type,
      code,
      displayName,
    } = this.props.details;

    return (
      <tr>
        <td>
          {id}
        </td>
        <td>
          {type}
        </td>
        <td>
          {code}
        </td>
        <td>
          {displayName}
        </td>
      </tr>
    );
  }

	render() {
    const { id, attributes = [] } = this.props.details;

    console.log(this.props.details);

    const MainTable = this.setMainTable();
    const AttributesTable = attributes.map(this.setAttributesTable);

    return (
      <Box className="tools__group">
        <h2 className="tools__sub-title">
          Current id: {id}
        </h2>
        <table className="tools__table">
          <thead>
            {MainHeader}
          </thead>
          <tbody>
            {MainTable}
          </tbody>
        </table>
        <table className="tools__table">
          <caption>Attributes</caption>
          <thead>
            {AttributesHeader}
          </thead>
          <tbody>
            {AttributesTable}
          </tbody>
        </table>
      </Box>
    );
	}
}


DetailsItem.propTypes = {
  details: PropTypes.object,
};

DetailsItem.defaultProps = {
  details: {},
};


export default DetailsItem;
