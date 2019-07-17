import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login.view';
import { onChange, restApiCallLogin } from '../controllers/Login.actions';
import { grantType, disabled, data } from '../controllers/Login.selectors';


const mapDispatchToProps = {
  onChange,
  onLogin: restApiCallLogin,
};

const mapStateToProps = state => ({
  checked: grantType(state),
  disabled: disabled(state),
  username: state.Login.form.username,
  password: state.Login.form.password,
  refreshToken: state.Login.form.refreshToken,
  data: data(state),
});


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(LoginContainer);
