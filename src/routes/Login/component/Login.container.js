import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login.view';
import { action } from '../controllers/Login.actions';
import { action as actionApi } from '../../../store/actions/session.actions';
import { grantType, disabled, data } from '../controllers/Login.selectors';
import { stateOr } from '../../../commons/selectors';


const mapDispatchToProps = {
  onChange: (name, value) => action.ON_LOGIN_CHANGE({ name, value }),
  onLogin: actionApi.RESTAPI_LOGIN.CALL,
};

const mapStateToProps = state => ({
  checked: grantType(state),
  disabled: disabled(state),
  username: state.Login.form.username,
  password: state.Login.form.password,
  refreshToken: stateOr(state, 'state.session.data.refreshToken', ''),
  data: data(state),
});


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default withRouter(LoginContainer);
