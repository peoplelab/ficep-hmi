import { connect } from 'react-redux';
import Login from './Main.view';
import { logged } from './Main.selectors';


/**
 * Map Redux store actions into React component funciton props
 */
const mapDispatchToProps = {
};


/**
 * Map Redux store states into React component props
 * @param {*} state Redux state
 */
const mapStateToProps = state => ({
  isUserLogged: logged(state),
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
export default LoginContainer;
