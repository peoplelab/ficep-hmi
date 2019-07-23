import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../../components/layouts/Box/Box.index';
import Button from '../../../components/forms/Button';

import './Cultures.style.scss';



class CulturesRoute extends PureComponent {
	constructor(props) {
    super(props);

  }

	render() {

    return (
      <section className="cultures">
        <h1 className="cultures__title">
          Cultures
        </h1>

      </section>
    );
	}
}


CulturesRoute.propTypes = {
};

CulturesRoute.defaultProps = {
};


export default CulturesRoute;
