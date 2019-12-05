//----------------------------------------------------------------------------------------
// File: Button.jsx
// Desc: Pulsante custom generico per la gestione eventi e restituzione dei valori associati
//
// Path: /src/widgets/common
//----------------------------------------------------------------------------------------
//	** Scheda Componente **
//	COMPONENT NAME: Button
//		Pulsante custom generico
//	PROPS:
//		onClick      : callback associata all'evento onClick
//		onMouseOver  : callback associata all'evento onMouseOver
//		onMouseLeave : callback associata all'evento onMouseLeave
//		className    : set classi attribuite al componente
//		children     : content del pulsante
//----------------------------------------------------------------------------------------


	// ** Definizione import **
	import React, {PureComponent} from 'react';
	import PropTypes              from 'prop-types';


	// ** Definizione componente **
	class Button extends PureComponent {

		constructor(props) {																			// Costruttore
			super(props);																				// Invoca il costruttore del parent passandogli le Props - Obbligatorio:
																										//	[«...a child class constructor cannot make use of "this." until "super()" has been called...» ] [«...When you pass props to "super()", the props get assigned to "this." ...» ]
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
	Button.propTypes = {																			// Definizione dei tipi delle Props del componente
		onClick     : PropTypes.func.isRequired,
		onMouseOver : PropTypes.func,
		onMouseLeave: PropTypes.func,
		children    : PropTypes.node,
		className   : PropTypes.string,
	};

	Button.defaultProps = {																			// Definizione valori di default delle Props componente
		onMouseLeave: function(){ return 0;},
		onMouseOver : function(){ return 0;},
		children    : null,
		className   : '',
	};

	export default Button;																			// Dichiarazione finale di export della classe componente
