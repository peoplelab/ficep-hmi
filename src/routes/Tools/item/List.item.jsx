import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../../components/layouts/Box/Box.index';
import ButtonData from '../../../components/forms/ButtonData';


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

  onCallDetails(event) {
    const { data } = event;

    this.props.callToolDetails(data);
  }

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

	render() {
    const {
      list,
    } = this.props;


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
  callToolDetails: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
};

ListItem.defaultProps = {
  list: [],
};


export default ListItem;
