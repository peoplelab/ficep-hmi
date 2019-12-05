//----------------------------------------------------------------------------------------
// File: ButtonData.jsx
// Desc: Pulsante per l'esecuzione di azioni e l'invio di dati
//       Indicati dei dati, questi verranno inviati tramite l'evento dell'azione
//
// Path: /src/components/layouts/ButtonData
//----------------------------------------------------------------------------------------


	import React, {PureComponent} from 'react';
	import PropTypes              from 'prop-types';


	// ** Definizione componente **
	class ButtonData extends PureComponent {

		constructor(props) {																			// Costruttore
			super(props);																				// Invoca il costruttore del parent passandogli le Props - Obbligatorio:
																										//	[�...a child class constructor cannot make use of "this." until "super()" has been called...� ] [�...When you pass props to "super()", the props get assigned to "this." ...� ]
			// Binding degli eventi gestiti
			this.onLocalClick      = this.onLocalClick.bind(this);										// Evento onClick
			this.onLocalMouseOver  = this.onLocalMouseOver.bind(this);									// Evento onMouseOver
			this.onLocalMouseLeave = this.onLocalMouseLeave.bind(this);									// Evento onMouseOver
		}


		// ** Handler degli eventi **
		onLocalClick(event) {																			// Evento: onClick
			const {onClick, ...attr} = this.props;														// Ricava la Injected Function dalle props
			onClick({event, attr})																		// Esegue la callback coi parametri del componente
		}
		onLocalMouseOver(event) {																		// Evento: onMouseOver
			const {onMouseOver, ...attr} = this.props;													// Ricava la Injected Function dalle props
			onMouseOver({event, attr});																	// Esegue la callback coi parametri del componente
		}
		onLocalMouseLeave(event) {
			const {onMouseLeave, ...attr} = this.props;
			onMouseLeave({event, attr});
		}


		// ** Render del componente **
		render() {
			const {																						// ** NOTA: non rimuovere (per ora) i due commenti sotto "eslint-..."
				onClick,
				onMouseOver,
				onMouseLeave,
				children,
				className,
				...rest
			} = this.props;

			const mergedClass = `btn ${className}`;														// Definizione del set di classi attribuite al componente

			return (
				<button 
					type="button" 
					className={mergedClass}
					onClick={this.onLocalClick} 
					onMouseOver={this.onLocalMouseOver}
					onMouseLeave={this.onLocalMouseLeave}
					{...rest}																			// Render delle props non gestite
				>
					{children}
				</button>
			);
		}
	}


	// ** Definizioni delle Props **
	ButtonData.propTypes = {																			// Definizione dei tipi delle Props del componente
		onClick     : PropTypes.func.isRequired,
		onMouseOver : PropTypes.func,
		onMouseLeave: PropTypes.func,
		children    : PropTypes.node,
		className   : PropTypes.string,
	};

	ButtonData.defaultProps = {																			// Definizione valori di default delle Props componente
		onMouseLeave: function(){ return 0;},
		onMouseOver : function(){ return 0;},
		children    : null,
		className   : '',
	};

	export default ButtonData;																			// Dichiarazione finale di export della classe componente
