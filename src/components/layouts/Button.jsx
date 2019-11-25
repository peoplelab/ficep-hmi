//----------------------------------------------------------------------------------------
// File: Button.jsx
// Desc: Pulsante per l'esecuzione di azioni
//
// Path: /src/components/layouts/Button
//----------------------------------------------------------------------------------------

	import React, {memo} from 'react';
	import PropTypes     from 'prop-types';

	const Button = (props) => {

		const {
			children,
			className,
			...rest
		} = props;

		const mergedClass = `btn ${className}`;															// Definizione del set di classi attribuite al componente

		return (
			<button type="button" className={mergedClass} {...rest}>
				{children}
			</button>
		);
	};


	// ** Definizioni delle Props **
	Button.propTypes = {																				// Definizione dei tipi delle Props del componente
		children : PropTypes.node,
		className: PropTypes.string,
		pippo    : PropTypes.string,
	};

	Button.defaultProps = {																				// Definizione valori di default delle Props componente
		children : null,
		pippo    : '',
		className: '',
	};

	export default memo(Button);																		// Dichiarazione finale di export del componente come tipo MEMO
