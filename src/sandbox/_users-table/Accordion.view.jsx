//----------------------------------------------------------------------------------------
// File: Accordion.view.jsx
//
// Desc: Pagina per la gestione degli utenti
// Path: /src/sandbox/_users-table/Accordion.view
//----------------------------------------------------------------------------------------

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/layouts/index.layouts';


class Accordion extends PureComponent {
	constructor(props) {
    super(props);

    const { open } = props;

    this.state = { open };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { onClick } = this.props;

    if (typeof onClick === 'function') {
      onClick(event);
    }

    this.setState(prevState => ({ open: !(prevState.open) }));
  }

	render() {
    const { children, className } = this.props;

    const mergedClass = `accordion ${className}`;

    const [header, ...section] = React.Children.toArray(children);

    const { open } = this.state;

    return (
      <div className={mergedClass}>
        <header className="accordion__header">
          <Button className="accordion__button" onClick={this.onClick}>
            {header}
          </Button>
        </header>
        {open && (
          <section className="accordion__section">
            {section}
          </section>
        )}
      </div>
    );
	}
}


Accordion.propTypes = {
  children: PropTypes.oneOfType(
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ).isRequired,
  open: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Accordion.defaultProps = {
  open: false,
  className: '',
  onClick: null,
};


export default Accordion;
