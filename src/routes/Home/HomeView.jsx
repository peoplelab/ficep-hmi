import React from 'react';
// import PropTypes from 'prop-types';
import Anchor from '../../components/layout/Anchor';

const myUrl = '/test-model';

const HomeComponent = () => (
  <div>
    Hello world!
    <br/>
    <br/>
    <br/>
    <Anchor path={ myUrl }> Vai a <b>TestModel</b></Anchor>
    <br/>
    <Anchor path="/login"> Vai a <b>Login</b></Anchor>
  </div>
);


HomeComponent.propTypes = {
};

HomeComponent.defaultProps = {
};


export default HomeComponent;
