import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // only for route components
import TestModel from './TestModelView';
import { actionCreator } from '../controllers/actions';


const mapDispatchToProps = {
  actionCreator
};

const mapStateToProps = state => ({
  data: state.TestModel.data,
});


const TestModelContainer = connect(mapStateToProps, mapDispatchToProps)(TestModel);

export default withRouter(TestModelContainer);
