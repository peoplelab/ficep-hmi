import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../../components/layouts/Box/Box.index';
import TextInput from '../../../components/forms/TextInput';
import PasswordInput from '../../../components/forms/PasswordInput';
import Button from '../../../components/forms/Button';
import Select from '../../../components/forms/Select';
import Field from '../items/Field.item';
import LoginError from '../items/LoginError.item';

import './Login.style.scss';


class LoginRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onChange(event) {
    const {
      name,
      value,
    } = event.target;

    this.props.onChange(name, value);
  }

  onLogin() {
    this.props.onLogin();
  }

	render() {
    const {
      disabled,
      errorOnLogin,
      culture,
      options,
      username,
      password,
    } = this.props;

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


const shapeOptions = {
  deafult: PropTypes.bool,
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};


LoginRoute.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape(shapeOptions)),
  disabled: PropTypes.bool,
  errorOnLogin: PropTypes.bool,
  username: PropTypes.string,
  password: PropTypes.string,
  refreshToken: PropTypes.string,
  culture: PropTypes.string,
  onChange : PropTypes.func.isRequired,
  onLogin : PropTypes.func.isRequired,
};

LoginRoute.defaultProps = {
  disabled: true,
  errorOnLogin: false,
  username: '',
  password: '',
  refreshToken: '',
  culture: '',
  options: [
    {
      message: 'it-IT',
      value: 'it-IT',
    }
  ]
};


export default LoginRoute;
