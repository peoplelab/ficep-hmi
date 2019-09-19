//-----------------------------------------------------------------------------------------------
// File: tools.item.details.jsx
//
// Desc: Elemento proprio della pagina tools per la visualizzazione dei dettagli di uno strumento
// Path: /src/sandbox/_tools/tools.item.details
//-----------------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box from '../../components/layouts/Box';


// intestazioni delle colonne delle tabelle dei dettagli di un tool
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

  // render dei dettagli del tool
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

  // render dei dettagli del tool
  setMainTable() {
    const { toolsGetState } = this.props;
    const { details } = toolsGetState;

    const { id, type, code, displayName } = details;

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

  // render della sezione dei dettagli del tool
	render() {
    const { toolsGetState } = this.props;
    const { details } = toolsGetState;
    if (!details || !('id' in details)) {
      return null;
    }

    const { id, attributes = [] } = details;

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
  toolsGetState: PropTypes.object.isRequired,
};

DetailsItem.defaultProps = {
};


export default DetailsItem;
