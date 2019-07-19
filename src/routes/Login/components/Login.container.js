import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login.view';
import { action } from '../controllers/Login.actions';
import { action as actionApi } from '../../../store/actions/session.actions';
import { disabled, errorOnLogin } from './Login.selectors';
import { stateOr } from '../../../commons/selectors';


/**
 * Map Redux store actions into React component funciton props
 */
const mapDispatchToProps = {
  onChange: (name, value) => action.ON_LOGIN_CHANGE({ name, value }),
  onLogin: actionApi.RESTAPI_LOGIN.CALL,
};


/**
 * Map Redux store states into React component props
 * @param {*} state Redux state
 */
const mapStateToProps = state => ({
  options: state.culture,
  culture: state.Login.form.culture,
  disabled: disabled(state),
  username: state.Login.form.username,
  password: state.Login.form.password,
  refreshToken: stateOr(state, 'state.session.data.refreshToken', ''),
  errorOnLogin: errorOnLogin(state),
});


/**
 * Connect React component to Redux store
 *
 * Note: connect automatically manages the interaction between component and store without need additional code
 */
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

/**
 * Note: add withRouter only when the React component is a route component
 */
export default withRouter(LoginContainer);
