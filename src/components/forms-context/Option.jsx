//----------------------------------------------------------------------------------------------------------
// File: Option.jsx
//
// Desc: Componente form per generare, data una lista di dati, una lista di opzioni per un componente select
// Path: /src/components/forms/Option
//----------------------------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';


const mapOptions = (data) => {
  const { value, message } = data;

  return (
    <option value={value} key={`option-${value}`}>
      {message}
    </option>
  );
};


const Option = (props) => {
  const {
    options,
  } = props;

  return  options.map(mapOptions);
};


const shapeOptions = {
  message: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
};


Option.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape(shapeOptions)).isRequired,
};

Option.defaultProps = {
};


export default memo(Option);
