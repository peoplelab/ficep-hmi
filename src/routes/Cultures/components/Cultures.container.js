import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Cultures from './Cultures.view';
import { action } from '../controllers/Cultures.actions';
// import { JsonToString } from './Cultures.presenter';
// import { stateOr } from '../../../commons/selectors';


const mapDispatchToProps = {
};

const mapStateToProps = state => ({
});


const CulturesContainer = connect(mapStateToProps, mapDispatchToProps)(Cultures);

export default withRouter(CulturesContainer);
