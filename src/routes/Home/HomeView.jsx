import React from 'react';
// import PropTypes from 'prop-types';

const myUrl = '/test-model';

const HomeComponent = () => (
  <div>
    Hello world!
	<br/>
	<br/>
	<br/>
	<a href={ myUrl }> Vai a <b>TestModel</b></a>
  </div>
);


HomeComponent.propTypes = {
};

HomeComponent.defaultProps = {
};


export default HomeComponent;
