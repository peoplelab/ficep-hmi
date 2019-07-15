import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // only for route components
import AsyncRoute from './AsyncRouteView';
import { actionCreator } from '../controllers/actions';


const mapDispatchToProps = {
  actionCreator
};

const mapStateToProps = state => ({
  data: state.AsyncRoute.data,
});


const AsyncRouteContainer = connect(mapStateToProps, mapDispatchToProps)(AsyncRoute);

export default withRouter(AsyncRouteContainer);
