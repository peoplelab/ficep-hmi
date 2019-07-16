//import React from 'react';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/* Mio test */
import MyBox		from '../../../components/layout/myBox';
import MyTextInput	from '../../../components/forms/TextInput';
import MyButton		from '../../../components/forms/Button';

//import '../../../style/template/Primary.scss';			// Andrà definito il SCSS


class TestModelComponent extends PureComponent {


	//--- Copiato paro paro ---
	constructor(props) {			// Schema da seguire per defi. costruttore e binding deegli aggiornamenti dello store di React. NOTA: props non è obbligatorio
		
		super(props);
//		this.state = {
//			...props,
//			value1: '',
//			value2: '2'
//		};

		this.onChange      = this.onChange.bind(this);
		this.onButtonClick = this.onButtonClick.bind(this);
	}


	onChange(event) {
		const { value } = event.target;
		//this.setState({ value1: value });
	}


	onButtonClick(event) {

		console.log('click');
		this.props.MyFunc({});

	}

	render() {

		const { myInputValue } = this.props;
		const a = true;

		if (!a) {

			return (
				<div>
					Hello async world extended TestModelComponent!<br/>
					<br/>
					import React,  PureComponent from &quot;react&quot;;
					<br/>
					<br/>
					test 2
				</div>
			);

		} else {

			return (
				<>
					<MyBox className="primary">
						Hello MyBox!
					</MyBox>
					<MyBox className="casella">
						<MyTextInput style={({ margin: '30px 10px 0', border: '1px solid black' })}
							name="txt01"
							value={myInputValue}
							onChange={this.onChange}
						/>
					</MyBox>

					<MyBox className="restResult">
					</MyBox>

					<MyBox className="pulsante" style={({ margin: '30px 10px 0'})} >
						<MyButton onClick={this.onButtonClick}>
							Test
						</MyButton>
					</MyBox>
				</>
			);
		}
	}
}


TestModelComponent.propTypes = {

	MyFunc: PropTypes.func.isRequired,
	myInputValue: PropTypes.arrayOf(PropTypes.object)

};

TestModelComponent.defaultProps = {
	myInputValue: []
};


export default TestModelComponent;
