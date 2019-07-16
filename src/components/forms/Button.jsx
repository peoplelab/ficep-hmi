import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Button extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { onClick } = this.props;

    onClick(event);
  }

  render() {
    const {
      children,
      className,
      onClick: _onClick, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    const mergedClass = `button ${className}`;

    return (
      <button
        className={mergedClass}
        type="button"
        onClick={this.onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
}


Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: null,
  className: '',
};


export default Button;
