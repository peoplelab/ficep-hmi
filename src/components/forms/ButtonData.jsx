import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class ButtonData extends PureComponent {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { onClick, data } = this.props;
    const newEvent = { ...event, data };

    onClick(newEvent);
  }

  render() {
    const {
      data: _data, // eslint-disable-line no-unused-vars
      onClick: _onClick, // eslint-disable-line no-unused-vars
      ...rest
    } = this.props;

    console.log('HELLO');

    return (
      <Button onClick={this.onClick} {...rest} />
    );
  }
}


const dataType = [
  PropTypes.bool,
  PropTypes.number,
  PropTypes.string,
];


ButtonData.propTypes = {
  data: PropTypes.oneOfType(dataType).isRequired,
  onClick: PropTypes.func.isRequired,
};

ButtonData.defaultProps = {
};


export default ButtonData;
