import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box		from '../../../components/layout/myBox';
import TextInput	from '../../../components/forms/TextInput';
import PasswordInput	from '../../../components/forms/PasswordInput';
import RadioButton	from '../../../components/forms/RadioButton';
import Button		from '../../../components/forms/Button';

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

  onLogin(event) {
    this.props.onLogin();
  }

	render() {
    const {
      data,
      checked,
      disabled,
      username,
      password,
      refreshToken,
    } = this.props;

    return (
      <Box className="login">
        <h1 className="login__title">
          Login route
        </h1>
        <form className="login__form">
          <Box className="login__group">
            <h2 className="login__subtitle">
              Use Password as GrantType
            </h2>
            <Box className="login__radio-box">
              <RadioButton
                className="login__radio-button"
                id="grantType-Password"
                name="grantType"
                value="Password"
                checked={checked.Password}
                onChange={this.onChange}
              />
              <label className="login__label" htmlFor="grantType-Password">
                Password GrantType
              </label>
            </Box>
            <Box className="login__text-box">
              <label className="login__label">
                Username
              </label>
              <TextInput
                className="login__text-input"
                name="username"
                value={username}
                onChange={this.onChange}
                disabled={!(checked.Password)}
              />
            </Box>
            <Box className="login__text-box">
              <label className="login__label">
                Password
              </label>
              <PasswordInput
                className="login__text-input"
                name="password"
                value={password}
                onChange={this.onChange}
                disabled={!(checked.Password)}
              />
            </Box>
          </Box>
          <Box className="login__group">
            <h2 className="login__subtitle">
              Use RefreshToken as GrantType
            </h2>
            <Box className="login__radio-box">
              <RadioButton
                className="login__radio-button"
                id="grantType-RefreshToken"
                name="grantType"
                value="RefreshToken"
                checked={checked.RefreshToken}
                onChange={this.onChange}
              />
              <label className="login__label" htmlFor="grantType-RefreshToken">
                RefreshToken GrantType
              </label>
            </Box>
            <Box className="login__text-box">
              <label className="login__label">
                RefreshToken
              </label>
              <p className="login__text-input">
                {refreshToken}
              </p>
            </Box>
          </Box>
          <Box className="login__group">
            <Box className="login__button-box">
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
          <Box className="login__group">
            <h2 className="login__subtitle">
              Response
            </h2>
            <p className="login__paragraph">
              {data}
            </p>
          </Box>
      </Box>
    );
	}
}


const shapeChecked = {
  Password: PropTypes.bool.isRequired,
  RefreshToken: PropTypes.bool.isRequired,
};


LoginRoute.propTypes = {
  checked: PropTypes.shape(shapeChecked).isRequired,
  disabled: PropTypes.bool,
  username: PropTypes.string,
  password: PropTypes.string,
  data : PropTypes.string,
  refreshToken: PropTypes.string,
  onChange : PropTypes.func.isRequired,
  onLogin : PropTypes.func.isRequired,
};

LoginRoute.defaultProps = {
  disabled: true,
  username: '',
  password: '',
  refreshToken: '',
  data: '',
};


export default LoginRoute;
