import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cultures from './Cultures.view';
import { action } from '../controllers/Cultures.actions';


const mapDispatchToProps = {
  getCultures: action.RESTAPI_CULTURES_GET.CALL,
  addCulture: action.RESTAPI_CULTURES_POST.CALL,
  removeCulture: id => action.RESTAPI_CULTURES_DELETE.CALL({ id }),
  updateCulture: action.RESTAPI_CULTURES_PUT.CALL,
};

const mapStateToProps = state => ({
  list: state.Cultures.data,
});


const CulturesContainer = connect(mapStateToProps, mapDispatchToProps)(Cultures);

export default withRouter(CulturesContainer);
