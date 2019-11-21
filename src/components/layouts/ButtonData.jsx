//----------------------------------------------------------------------------------------
// File: ButtonData.jsx
// Desc: Pulsante per l'esecuzione di azioni e l'invio di dati
//       Indicati dei dati, questi verranno inviati tramite l'evento dell'azione
//
// Path: /src/components/layouts/ButtonData
//----------------------------------------------------------------------------------------


	import React, {PureComponent} from 'react';
	import PropTypes              from 'prop-types';
	import Button                 from './Button';


	// ** Definizione componente **
	class ButtonData extends PureComponent {

		constructor(props) {																			// Costruttore (In questo caso non serve. Perché?)
			super(props);

			this.onClick = this.onClick.bind(this);														// Binding degli eventi gestiti
		}

		onClick(event) {
			const { onClick, data } = this.props;
			const newEvent = { ...event, data };
			onClick(newEvent);
		}

		render() {
			const {
				data: _data,			// eslint-disable-line no-unused-vars
				onClick: _onClick,		// eslint-disable-line no-unused-vars
				...rest
			} = this.props;

			return (
				<Button onClick={this.onClick} {...rest} />
			);
		}
	}

	ButtonData.propTypes = {
		data: PropTypes.any.isRequired,
		onClick: PropTypes.func.isRequired,
	};

	ButtonData.defaultProps = {
	};


	export default ButtonData;
