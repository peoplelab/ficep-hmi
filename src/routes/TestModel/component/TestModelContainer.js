import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // only for route components
import TestModel from './TestModelView';
import { actionCreator, types } from '../controllers/actions';


const mapDispatchToProps = {
	
	MyFunc: (data) => {													// Funzione invocata al click
		return actionCreator( types.TESTMODEL_CALL, data )
	}

};

const mapStateToProps = state => ({
	data: state.TestModel.data,

	// Gestione ritorno
	myInputValue: state.TestModel.data,

});


const TestModelContainer = connect(mapStateToProps, mapDispatchToProps)(TestModel);

export default withRouter(TestModelContainer);
