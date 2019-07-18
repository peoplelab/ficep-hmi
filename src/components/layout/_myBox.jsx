import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';


class Box extends PureComponent {
  render() {
    const {
      children,
      className,
      ...rest
    } = this.props;

    return (
      <div className={className} {...rest}>
        {children}
      </div>
    );
  }
}


Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Box.defaultProps = {
  children: null,
  className: '',
};


export default Box;
