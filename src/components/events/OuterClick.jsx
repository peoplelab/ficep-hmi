//------------------------------------------------------------------------------------------------------------------------
// File: OuterClick.jsx
//
// Desc: Componente React con il ruolo di determinare se sono avvenuti click esterni ad un determinato insieme di elementi
// Path: /src/components/common/OuterClick
//------------------------------------------------------------------------------------------------------------------------


import React, { Component } from 'react';
import PropTypes from 'prop-types';


class OuterClick extends Component {
  constructor(props) {
    super(props);

    // Inizializzazione dell'oggetto puntatore all'elemento HTML target
    this.childRef = React.createRef();

    this.onOuterClick = this.onOuterClick.bind(this);
  }

  // Avvia l'ascolto
  componentDidMount() {
    document.addEventListener('mousedown', this.onOuterClick);
  }

  // Ferma l'ascolto
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onOuterClick);
  }

  // Esegue la funzione indicata solo se il click è esterno all'elemento HTML indicato
  onOuterClick(event) {
    if (this.childRef.current && !this.childRef.current.contains(event.target)) {
      this.props.onOuterClick(event);
    }
  }

  // render dell'handler
  render() {
    const { children, className } = this.props;

    return (
      // tramite la proprietà ref, passata ad un tag JSX, è possibile
      // indicare il corrispettivo elemento HTML da puntare nel DOM reale
      <div className={className} ref={this.childRef}>
        {children}
      </div>
    );
  }
}


OuterClick.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onOuterClick: PropTypes.func.isRequired,
};

OuterClick.defaultProps = {
  className: '',
};


export default OuterClick;
