//----------------------------------------------------------------------------------------
// File: cultures.view.jsx
//
// Desc: Pagina per la gestione delle culture
// Path: /src/sandbox/_cultures/cultures.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root'; // Gestore dell'hot-reloading della route
import Button from '../../components/layouts/Button';
import { ModalHandler } from '../../controllers/common/modal.handler';


class ModalRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.state = {
      Component: null,
    };

    this.confirmOpenRedux = this.confirmOpenRedux.bind(this);
    this.errorOpenRedux = this.errorOpenRedux.bind(this);
    this.infoOpenRedux = this.infoOpenRedux.bind(this);
    this.successOpenRedux = this.successOpenRedux.bind(this);

    this.onConfirm = this.onConfirm.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onConfirm() {
    alert('HI!');
  }

  confirmOpenRedux() {
    ModalHandler.Confirm({ onConfirm: this.onConfirm });
  }

  errorOpenRedux() {
    ModalHandler.Error({
      errorCode: 'TEST_CODE',
      errorsList: ['TEST_LIST'],
    });
  }

  infoOpenRedux() {
    ModalHandler.Info({ message: 'TEST_INFO' });
  }

  successOpenRedux() {
    ModalHandler.Success();
  }

	render() {

    return (
        <section className="test">
          <Button onClick={this.confirmOpenRedux} >Open modal confirm (redux case)</Button>
          <br />
          <br />
          <Button onClick={this.errorOpenRedux} >Open modal error (redux case)</Button>
          <br />
          <br />
          <Button onClick={this.infoOpenRedux} >Open modal info (redux case)</Button>
          <br />
          <br />
          <Button onClick={this.successOpenRedux} >Open modal success (redux case)</Button>
          <br />
          <br />
          {this.state.Component}
        </section>
    );
	}
}


ModalRoute.propTypes = {
};

ModalRoute.defaultProps = {
};


export default hot(ModalRoute);
