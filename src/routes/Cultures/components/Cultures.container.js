import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cultures from './Cultures.view';
import { action } from '../controllers/Cultures.actions';


const mapDispatchToProps = {
  getCultures: action.RESTAPI_CULTURES_GET_CALL,
  addCulture: action.RESTAPI_CULTURES_POST_CALL,
  removeCulture: action.RESTAPI_CULTURES_DELETE_CALL,
  updateCulture: action.RESTAPI_CULTURES_PUT_CALL,
};

const mapStateToProps = state => ({
  list: state.Cultures.data,
});


const CulturesContainer = connect(mapStateToProps, mapDispatchToProps)(Cultures);

export default withRouter(CulturesContainer);
