import React, { Component } from 'react';
import PropTypes from 'prop-types';


const normalizeTime = n => n <= 9 ? `0${n}` : n;


class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = { time: this.setTime() };

    this.clock = null;
    this.setTime = this.setTime.bind(this);
  }

  componentDidMount() {
    this.clock = setInterval(this.setTime, 60000);
  }

  componentWillUnmount() {
    clearInterval(this.clock);
  }

  setTime() {
    const { hasSeconds, symbol } = this.props;

    const now = new Date();
    const hours = normalizeTime(now.getHours());
    const minutes = normalizeTime(now.getMinutes());
    let seconds = '';

    if (hasSeconds) {
      seconds = normalizeTime(now.getMinutes());
      seconds = `${symbol}${seconds}`;
    }

    const time = `${hours}${symbol}${minutes}${seconds}`;

    this.setState(() => ({ time }));
  }

  render() {
    const { className } = this.props;
    const { time } = this.state;

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
