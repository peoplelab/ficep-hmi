//----------------------------------------------------------------------------------------
// File: Box.jsx
//
// Desc: Componente React con il ruolo di contenitore generico
// Path: /src/components/layouts/Box
//----------------------------------------------------------------------------------------


import React, { Component } from 'react';
import PropTypes from 'prop-types';


class OuterClick extends Component {
  constructor(props) {
    super(props);

    this.childRef = React.createRef();

    this.onOuterClick = this.onOuterClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onOuterClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onOuterClick);
  }

  onOuterClick(event) {
    if (this.childRef.current && !this.childRef.current.contains(event.target)) {
      this.props.onOuterClick(event);
    }
  }

  render() {
    const { children, className } = this.props;

    return (
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
