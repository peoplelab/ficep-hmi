import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../../components/layouts/Box/Box.index';
import TextInput from '../../../components/forms/TextInput';
import PasswordInput from '../../../components/forms/PasswordInput';
import Button from '../../../components/forms/Button';
import Select from '../../../components/forms/Select';
import Field from '../items/Field.item';
import LoginError from '../items/LoginError.item';

import './Login.style.scss'; // apply Login style to this route


class LoginRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);

    this.state = {
      username: '',
      password: '',
      culture: 'it-IT',
    };
  }

  onChange(event) {
    const {
      name,
      value,
    } = event.target;

    this.setState({ [name]: value });
  }

  onLogin() {
    this.props.onLogin(this.state);
  }

	render() {
    const {
      errorOnLogin, options,
    } = this.props;

    const {
      culture, username, password,
    } = this.state;

    const disabled = !username || !password;

    return (
      <section className="login">
        <Box className="login__dialog">
          <form className="login__form">
            <h1 className="login__title">
              Login
            </h1>
            <Box className="login__group">
              <Field label="Username">
                <TextInput
                  className="login__text-input"
                  name="username"
                  value={username}
                  onChange={this.onChange}
                />
              </Field>
              <Field label="Password">
                <PasswordInput
                  className="login__text-input"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                />
              </Field>
              <Field label="Culture">
                <Select
                  className="login__select-input"
                  name="culture"
                  value={culture}
                  options={options}
                  onChange={this.onChange}
                />
              </Field>
            </Box>
            <Box className="login__group">
              <Box className="login__box">
                <Button
                  className="login__button"
                  onClick={this.onLogin}
                  disabled={disabled}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </form>
        </Box>
        <LoginError show={errorOnLogin} />
      </section>
    );
	}
}

/**
 * Define object keys id and relative value types
 */
const shapeOptions = {
  deafult: PropTypes.bool,
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};


/**
 * Define component properties types
 */
LoginRoute.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape(shapeOptions)),
  errorOnLogin: PropTypes.bool,
  onLogin : PropTypes.func.isRequired,
};

/**
 * Define default value of component properties
 */
LoginRoute.defaultProps = {
  errorOnLogin: false,
  options: [
    {
      message: 'it-IT',
      value: 'it-IT',
    }
  ]
};


export default LoginRoute;
