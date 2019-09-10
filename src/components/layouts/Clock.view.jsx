//------------------------------------------------------------------------------------------------
// File: Clock.view.jsx
//
// Desc: Orologio React
// Path: /src/components/forms-custom/Clock.view
//------------------------------------------------------------------------------------------------


import React, { Component } from 'react';
import PropTypes from 'prop-types';


const normalizeTime = n => n <= 9 ? `0${n}` : n;


class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { now: new Date() };

    this.clock = null;

    this.normalize = this.normalize.bind(this);
    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    this.clock = setInterval(this.setTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  normalize() {
    const { hasSeconds, symbol } = this.props;

    const { now } = this.state;
    const hours = normalizeTime(now.getHours());
    const minutes = normalizeTime(now.getMinutes());
    let seconds = '';

    if (hasSeconds) {
      seconds = normalizeTime(now.getMinutes());
      seconds = `${symbol}${seconds}`;
    }

    return `${hours}${symbol}${minutes}${seconds}`;
  }

  setTime() {
    this.setState(() => ({ now: new Date() }));
  }

  render() {
    const { className } = this.props;

    const time = this.normalize();

    const mergedClass = `clock ${className}`;

    return (
      <p className={mergedClass}>
        {time}
      </p>
    );
  }
}


Clock.propTypes = {
  className: PropTypes.string,
  symbol: PropTypes.string,
  hasSeconds: PropTypes.bool,
};

Clock.defaultProps = {
  className: '',
  symbol: ':',
  hasSeconds: false,
};


export default Clock;
