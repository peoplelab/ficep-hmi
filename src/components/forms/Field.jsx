//----------------------------------------------------------------------------------------
// File: Field.jsx
//
// Desc: Container layout per i campi delle form
// Path: /src/components/forms/Field
//----------------------------------------------------------------------------------------


import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Box from '../layouts/Box';


const Field = (props) => {
  const {
    children,
    className,
    label,
  } = props;

  const mergedClass = `field ${className}`;

  // recupera l'id del campo e aggiunge una nuova classe (children deve contenere un solo componente)
  let id = undefined;
  const newChildern = React.Children.map(children, child => {
    if (!(React.isValidElement(child))) {
      return;
    }

    ({ id } = child.props);

    const { className } = child.props;

    return React.cloneElement(child, { className: `field__input ${className}` });
  });


  return (
    <Box className={mergedClass}>
      {label && (
        <label className="field__label" htmlFor={id}>
          {label}
        </label>
      )}
      {newChildern}
    </Box>
  );
};


Field.propTypes = {
  children: PropTypes.element.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
};

Field.defaultProps = {
  className: '',
  label: '',
};


export default memo(Field);
