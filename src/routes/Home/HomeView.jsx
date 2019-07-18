import React from 'react';
// import PropTypes from 'prop-types';
import Anchor from '../../components/layout/Anchor/Anchor.index';


const HomeComponent = () => (
  <div>
    Hello world!
    <br/>
    <br/>
    <br/>
    <Anchor path="/login"> Vai a <b>Login</b></Anchor>
  </div>
);


HomeComponent.propTypes = {
};

HomeComponent.defaultProps = {
};


export default HomeComponent;
