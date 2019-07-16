//import React from 'react';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/* Mio test */
import MyBox from '../../../components/layout/myBox';
import MyTextInput from '../../../components/forms/TextInput';
import MyButton from '../../../components/forms/Button';
//import '../../../style/template/Primary.scss';			// Andrà definito il SCSS


class TestModelComponent extends PureComponent {

/*/----------- Copiato paro paro

    constructor(props) {
        super(props);

        this.state = {
            ...props,
            value1: '1',
            value2: '2'
        };

        this.onChange = this.onChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onChange(event) {
        var { value } = event.target;
        const { name } = event.target;
        //let pippo = name + 'pippo';
        var pippo = name;
        var val = {};
        if (pippo == 'txt01') {
            val = { value1: value };
        } else {
            val = { value2: value };
        }


        this.setState(val);
    }

//    onButtonClick(event) {
//        const { userId, dispatch } = this.props;
//        let store = window.__STORE;
//        store.dispatch({ type: 'TEST', payload: { userId } })
//
//    }

//--------------*/

	onChange(event) {
		// Null
	}
	onButtonClick(event) {
		// Null
		console.log('click');
	}

	render() {

		//const { children } = this.props;
		const {
			value1,
			value2
		} = ''; //this.state;

		const a = true;

		if (!a) {

			return (
				<div>
					Hello async world extended TestModelComponent!<br/>
					<br/>
					import React, { PureComponent } from &quot;react&quot;;
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
						value={value1}
						onChange={this.onChange}
					/>
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
};

TestModelComponent.defaultProps = {
};


export default TestModelComponent;
