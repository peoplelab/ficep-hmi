import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Login from './Login.view';
import { action as actionApi } from '../../../store/actions/session.actions';
import { errorOnLogin } from './Login.selectors';


/**
 * Map Redux store actions into React component funciton props
 */
const mapDispatchToProps = {
  onLogin: actionApi.RESTAPI_LOGIN.CALL,
};


/**
 * Map Redux store states into React component props
 * @param {*} state Redux state
 */
const mapStateToProps = state => ({
  options: state.culture,
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
