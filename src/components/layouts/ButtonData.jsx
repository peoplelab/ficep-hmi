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
																										//	[«...a child class constructor cannot make use of "this." until "super()" has been called...» ] [«...When you pass props to "super()", the props get assigned to "this." ...» ]
			this.onLocalClick = this.onLocalClick.bind(this);											// Binding degli eventi gestiti
			this.onLocalMouseOver = this.onLocalMouseOver.bind(this);											// Binding degli eventi gestiti
		}

		onLocalClick(event) {																				// Handler dell'evento onClick del componente
			const {onClick, ...attr} = this.props;
			const newEvent = {event, attr};
			onClick(newEvent);
		}

		onLocalMouseOver(event) {																				// Handler dell'evento onClick del componente
			const {onMouseOver, ...attr} = this.props;
			const newEvent = {event, attr};
			onMouseOver(newEvent);
		}

		render() {
			const {																						// ** NOTA: non rimuovere (per ora) i due commenti sotto "eslint-..."
				onClick,
				onMouseOver,
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
					on
					{...rest}
				>
					{children}
				</button>
			);
		}
	}


	// ** Definizioni delle Props **
	ButtonData.propTypes = {																			// Definizione dei tipi delle Props del componente
		onClick    : PropTypes.func.isRequired,
		onMouseOver: PropTypes.func,
		children   : PropTypes.node,
		className  : PropTypes.string,
	};

	ButtonData.defaultProps = {																			// Definizione valori di default delle Props componente
		onMouseOver: function(){ return 0;},
		children   : null,
		className  : '',
	};

	export default ButtonData;																			// Dichiarazione finale di export della classe componente
