import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export function BaseButton({ ...props }) {
  const { label } = props;
  return <Button {...props}>{label}</Button>;
}

BaseButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'success',
    'error',
    'info',
    'warning',
  ]),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Describe the Variant of the button?
   */
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),

  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  variant: 'contained',
  onClick: undefined,
  label: 'Button',
};
