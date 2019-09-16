//----------------------------------------------------------------------------------------
// File: login.view.jsx
//
// Desc: Pagina per la gestione della login
// Path: /src/components/routes/login/login.view
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader/root'; // Gestore dell'hot-reloading della route
import Box from '../../layouts/Box';
import Card from '../../layouts/Card.view';
import InputCard from '../../forms-custom/InputCard.view';
import Gallery from '../../layouts/Gallery.view';
import Form from '../../forms-context/Form';
import TextInput from '../../forms-context/TextInput';
import PasswordInput from '../../forms-context/PasswordInput';
import Select from '../../forms-context/Select';
import Option from '../../forms-context/Option';
import Submit from '../../forms-context/Submit';
import Field from '../../forms-context/Field';
import SetStore from '../../forms-context/SetStore';
import ButtonForm from '../../forms-context/ButtonForm';

import { callLogin, callCultureGet, callLastLogin } from '../../../controllers/routes/login/login.controller';

import intl from '../../../../public/translations/login/default.json';

import '../../../styles/routes/login.style.scss'; // apply Login style to this route


// lista dei campi obbligari
const required = ['username', 'password'];

// stato iniziale della form
const initial = {
  username: '',
  password: '',
  culture: 'it-IT',
  data: null,
};


const intlCard = {
  ADMIN: intl.login_user_administrator,
  SUPER: intl.login_user_technician,
  USER: intl.login_user_operator,
  lastaccess: intl.login_info_lastaccess,
};


class LoginRoute extends Component {

	constructor(props) {
    super(props);

    // inizializzazione dello stato della pagina
    this.state = {
      usersList: [],
      cultureList: [],
    };

    this.updateState = this.updateState.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.SlideTemplate = this.SlideTemplate.bind(this);
  }

  // a componente carico, viene richiesta la lista delle culture e degli ultimi accessi, quindi aggiornato lo stato corrente
  componentDidMount() {
    const dispatch = this.updateState;

    callCultureGet({ dispatch });
    callLastLogin({ dispatch });
  }

  // chimata per aggiornare lo stato corrente della pagina
  updateState(newState) {
    this.setState(newState);
  }

  // metodo per la gestione dell'evento onchange di un generico campo di input
  onChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  // esegue la richiesta di login
  onLogin(data, event) {
    const dispatch = this.updateState;

    callLogin({ data, dispatch });
  }

  externalDispatch(prevState, dispatch) {
    return (event) => {
      const { value } = event.target;

      dispatch({
        username: value.username,
        culture: value.culture,
      });
    };
  }

  SlideTemplate(props) {
    // {
    //   issuedAt,
    //   groups,
    //   username,
    //   culture,
    // } === props;

    return (
      <SetStore event="onClick" setter={this.externalDispatch}>
        <ButtonForm className="login__button-card" name="data" value={props}>
          <Card
            className="login__card"
            intl={intlCard}
            {...props}
          />
        </ButtonForm>
      </SetStore>
    );
  }

  // renderizzazione della pagina
	render() {
    const { usersList, cultureList } = this.state;

    const newCultureList = cultureList.map((value) => ({ value: value.code, message: value.description }));

    return (
      <section className="login">
        <Box className="login__dialog">
          <Form className="login__form" initial={initial}>
            <p className="login__title">
              {intl.login_info_title}
            </p>
            <Box className="login__form-box">
              <Field className="login__field">
                <InputCard className="login__text-input" name="data" initial={initial} intl={intlCard}>
                  <TextInput className="login__text-input" name="username" placeholder={intl.login_form_username} />
                </InputCard>
              </Field>
              <Field className="login__field">
                <PasswordInput
                  className="login__text-input" name="password" placeholder={intl.login_form_password}
                />
              </Field>
              <Field className="login__field">
                <Select className="login__select-input" name="culture">
                  <Option options={newCultureList} />
                </Select>
              </Field>
              <Submit className="login__form-submit" required={required} onSubmit={this.onLogin} name="login-form">
                Login
              </Submit>
            </Box>
            <Gallery
              className="login__form-gallery"
              list={usersList}
              // eslint-disable-next-line react/no-children-prop
              children={this.SlideTemplate}
            />
          </Form>
        </Box>
      </section>
    );
	}
}


/**
 * Define component properties types
 */
LoginRoute.propTypes = {
};

/**
 * Define default value of component properties
 */
LoginRoute.defaultProps = {
};


export default hot(LoginRoute);
