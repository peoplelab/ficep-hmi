import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../../components/layouts/Box/Box.index';
import Button from '../../../components/forms/Button';
import List from '../item/List.item';
import Details from '../item/Details.item';

import './Tools.style.scss';


class ToolsRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.onCallList = this.onCallList.bind(this);
  }

  onCallList() {
    this.props.callToolsList();
  }

	render() {
    const {
      list,
      id,
      details,
      callToolDetails,
    } = this.props;

    console.log('Render Tools Route');

    return (
      <section className="tools">
        <h1 className="tools__title">
          Tools
        </h1>
        <Box className="tools__container">
          <Box className="tools__group">
            <Button className="tools__button" onClick={this.onCallList}>
              Get tools list
            </Button>
          </Box>
          {list.length > 0 &&  (
            <List list={list} callToolDetails={callToolDetails} />
          )}
          {(id && details) && (
            <Details id={id} details={details} />
          )}
        </Box>
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
