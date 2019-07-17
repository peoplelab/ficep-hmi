import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // only for route components
import TestModel from './testModel.view';
import { actionCreator, types } from '../controllers/actions';
import { stringifyData } from '../controllers/testModel.selectors';


const mapDispatchToProps = {

	MyFunc: (data) => {													// Funzione invocata al click
		return actionCreator( types.TESTMODEL_CALL, data )
	}

};

const mapStateToProps = state => ({
	//data: state.TestModel.data,
	data: state.TestModel_pippo.data,

	// Gestione ritorno
	// myInputValue: state.TestModel_pippo.data,
	myInputValue: stringifyData(state),
	//myInputValue: state.TestModel_pippo.total_pages,

});


const TestModelContainer = connect(mapStateToProps, mapDispatchToProps)(TestModel);

export default withRouter(TestModelContainer);
