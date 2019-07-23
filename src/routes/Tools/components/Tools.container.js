import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Tools from './Tools.view';
import { action } from '../controllers/Tools.actions';
import { JsonToString } from './Tools.presenter';
import { stateOr } from '../../../commons/selectors';


const mapDispatchToProps = {
  callToolsList: () => action.CALL_TOOLS_LIST(),
  callToolDetails: id => action.CALL_TOOL_DETAILS({ id }),
};

const mapStateToProps = state => ({
  list: state.Tools.list.data,
  id: state.Tools.currentID,
  details: JsonToString(stateOr(state, 'state.Tools.details.data', null)),
});


const ToolsContainer = connect(mapStateToProps, mapDispatchToProps)(Tools);

export default withRouter(ToolsContainer);
