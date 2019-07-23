import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../../components/layouts/Box/Box.index';
import Button from '../../../components/forms/Button';
import ButtonData from '../../../components/forms/ButtonData';

import './Tools.style.scss';


const header = (
  <tr key="tool-header">
    <th>id</th>
    <th>type</th>
    <th>code</th>
    <th>diameter</th>
    <th>name</th>
  </tr>
);


class ToolsRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.onCallList = this.onCallList.bind(this);
    this.onCallDetails = this.onCallDetails.bind(this);

    this.mapList = this.mapList.bind(this);
  }

  onCallList() {
    this.props.callToolsList();
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
      id,
      details,
    } = this.props;

    console.log('Render Tools Route');

    const Table = list.map(this.mapList);

    return (
      <section className="tools">
        <h1 className="tools__title">
          Tools
        </h1>
        <Box className="tools__group">
          <Button className="tools__button" onClick={this.onCallList}>
            Get tools list
          </Button>
        </Box>
        {Table.length > 0 && (
          <>
            <br/>
            <br/>
            <br/>
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
          </>
        )}
        {!(!id || !details) && (
          <>
            <br/>
            <br/>
            <br/>
            <Box className="tools__group">
              <h2 className="tools__sub-title">
                Current id: {id}
              </h2>
              <p className="tools__details">
                {details}
              </p>
            </Box>
          </>
        )}
      </section>
    );
	}
}


ToolsRoute.propTypes = {
  callToolsList: PropTypes.func.isRequired,
  callToolDetails: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.object),
  id: PropTypes.number,
  details: PropTypes.string,
};

ToolsRoute.defaultProps = {
  list: [],
  id: NaN,
  details: null,
};


export default ToolsRoute;
