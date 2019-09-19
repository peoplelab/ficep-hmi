//-----------------------------------------------------------------------------------------------
// File: tools.item.list.jsx
//
// Desc: Elemento proprio della pagina tools per la visualizzazione della lista degli strumenti
// Path: /src/sandbox/_tools/tools.item.list
//-----------------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../components/layouts/Box';
import ButtonData from '../../components/layouts/ButtonData';
import { callToolDetails } from '../../controllers/routes/tools/tools.controller';


// intestazioni delle colonne della tabella dei tools
const header = (
  <tr key="tool-header">
    <th>id</th>
    <th>type</th>
    <th>code</th>
    <th>diameter</th>
    <th>display name</th>
  </tr>
);


class ListItem extends PureComponent {
	constructor(props) {
    super(props);

    this.onCallDetails = this.onCallDetails.bind(this);

    this.mapList = this.mapList.bind(this);
  }

  // richiesta dei dati di dettaglio di uno strumento
  onCallDetails(event) {
    const { data } = event;

    const { toolsSetState } = this.props;

    callToolDetails({
      data,
      dispatch: toolsSetState,
    });
  }

  // render della lista dei tools
  mapList(data) {
    const { id, type, code, diameter, displayName } = data;

    return (
      <tr key={`tool-${id}`}>
        <td>
          <ButtonData className="tools__button" onClick={this.onCallDetails} data={id}>
            {id}
          </ButtonData>
        </td>
        <td>
          {type}
        </td>
        <td>
          {code}
        </td>
        <td>
          {diameter}
        </td>
        <td>
          {displayName}
        </td>
      </tr>
    );
  }

  // render della sezione della tabella dei tools
	render() {
    const { toolsGetState } = this.props;

    const { list } = toolsGetState;

    if (!(Array.isArray(list)) || list.length === 0) {
      return null;
    }

    const Table = list.map(this.mapList);

    return (
      <Box className="tools__group">
        <h2 className="tools__sub-title">
          List
        </h2>
        <table className="tools__table">
          <thead>
            {header}
          </thead>
          <tbody>
            {Table}
          </tbody>
        </table>
      </Box>
    );
	}
}


ListItem.propTypes = {
  toolsSetState: PropTypes.func.isRequired,
  toolsGetState: PropTypes.object.isRequired,
};

ListItem.defaultProps = {
};


export default ListItem;
