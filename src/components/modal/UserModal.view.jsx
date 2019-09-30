//----------------------------------------------------------------------------------------
// File: UserModal.view.jsx
//
// Desc: Widget modale, contiene le funzionalità specifiche per l'utente
// Path: /src/components/modal/UserModal.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Anchor, Link } from '../layouts/index.layouts';
import AdminArea from '../common/Area/Area.admin';
import { callLogout } from '../../controllers/api/logout.controller';

import '../../styles/modal/UserModal.style.scss';
import Enum from '../../utils/Enum';


const TEMPLATE = Enum.from('MAIN', 'DETAILS');


class HomeRoute extends PureComponent {
  static getDerivedStateFromProps(props, state) {
    if (!(props.visible)){
      return {
        template: TEMPLATE.MAIN,
        visible: props.visible,
      };
    }

    return null;
  }

	constructor(props) {
    super(props);

    this.state = { template: TEMPLATE.MAIN };

		this.onLogout = this.onLogout.bind(this);
		this.onClick = this.onClick.bind(this);
		this.onDetails = this.onDetails.bind(this);
		this.onGoBack = this.onGoBack.bind(this);
		this.templateDetails = this.templateDetails.bind(this);
		this.templateMain = this.templateMain.bind(this);
  }

  onClick(event) {
    this.props.onClick(event);
  }

  onGoBack(event) {
    this.setState(() => ({ template: TEMPLATE.MAIN }));
  }

  onDetails(event) {
    this.setState(() => ({ template: TEMPLATE.DETAILS }));
  }

  // chimata a logout
	onLogout(event) {
    // in assenza di parametri nella funzione del controller, è necessario passare sempre un oggetto vuoto
		callLogout({});
    this.props.onClick(event);
	}

  templateDetails() {
    return (
      <section className="user-modal">
        <div className="user-modal__bg" />
        <Button
          className="user-modal__go-back"
          onClick={this.onGoBack}
        >
        <i className="user-modal__back-icon ic-arrow-link" />
        </Button>
        <Anchor
          className="user-modal__button anchor"
          current
          path="/password"
          onClick={this.onClick}
        >
          {window.intl.user_action_password}
        </Anchor>
      </section>
    );
  }

  templateMain() {
    return (
      <>
        <AdminArea>
          <section className="user-modal user-modal--admin">
            <div className="user-modal__bg bg-user-modal-admin" />
            <Link className="user-modal__link user-modal__link--admin" onClick={this.onDetails}>
              {window.intl.user_info_details}
            </Link>
            <Anchor
              className="user-modal__button-2 anchor"
              current
              path="/users"
              onClick={this.onClick}
            >
              {window.intl.user_info_management}
            </Anchor>
            <Button
              className="user-modal__button anchor"
              onClick={this.onLogout}
            >
            { window.intl.user_action_logout}
            </Button>
          </section>
        </AdminArea>
        <AdminArea reverse>
          <section className="user-modal">
            <div className="user-modal__bg bg-user-modal" />
            <Link className="user-modal__link" onClick={this.onDetails} symbol=">">
              {window.intl.user_info_details}
            </Link>
            <Button
              className="user-modal__button anchor"
              onClick={this.onLogout}
            >
              {window.intl.user_action_logout}
            </Button>
          </section>
        </AdminArea>
      </>
    );
  }

  // renderizzazione della pagina
	render() {
    const { visible } = this.props;
    const { template } = this.state;

    if (!visible) {
      return null;
    }

    switch (template) {
      case TEMPLATE.DETAILS: {
        return this.templateDetails();
      }
      case TEMPLATE.MAIN: {
        return this.templateMain();
      }
      default: {
        return null;
      }
    }
	}
}


/**
 * Define component properties types
 */
HomeRoute.propTypes = {
  visible: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

/**
 * Define default value of component properties
 */
HomeRoute.defaultProps = {
  visible: false,
};


export default HomeRoute;
