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

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);

    this._isOuterClick = false;
  }

  // Avvia l'ascolto
  componentDidMount() {
    document.addEventListener('mousedown', this.onMouseDown);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  // Ferma l'ascolto
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onMouseDown);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  // Verifica se il click è esterno all'elemento HTML indicato
  onMouseDown(event) {
    if (this.childRef.current && !this.childRef.current.contains(event.target)) {
      this._isOuterClick = true;
    }
  }

  // Esegue la funzione indicata solo se il click è esterno all'elemento HTML indicato
  onMouseUp(event) {
    if (this._isOuterClick) {
      this.props.onOuterClick(event);
      this._isOuterClick = false;
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
