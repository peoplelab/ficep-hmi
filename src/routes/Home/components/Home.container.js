import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../HomeView';
//import { action } from '../controllers/Login.actions';
import { action as actionApi } from '../../../store/actions/session.actions';
//import { disabled } from './Login.selectors';
//import { stateOr } from '../../../commons/selectors';


const mapDispatchToProps = {
 // onChange: (name, value) => action.ON_LOGIN_CHANGE({ name, value }),
  onLogout: actionApi.RESTAPI_LOGOUT.CALL,
};

const mapStateToProps = state => ({
//  options: state.culture,
//  culture: state.Login.form.culture,
//  disabled: disabled(state),
//  username: state.Login.form.username,
//  password: state.Login.form.password,
//  refreshToken: stateOr(state, 'state.session.data.refreshToken', ''),
});


const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default withRouter(HomeContainer);
