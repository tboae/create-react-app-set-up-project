import React from 'react';
import { Button } from '@material-ui/core';
import useStyles from './style';
import PropTypes from 'prop-types';

export function BaseButton({ ...props }) {
  // eslint-disable-next-line no-console
  console.log(
    '🚀 ~ file: BaseButton.jsx ~ line 7 ~ BaseButton ~ props',
    props,
  );
  const { label } = props;
  const classes = useStyles();
  return (
    <Button className={classes.button} {...props}>
      {label}
    </Button>
  );
}

BaseButton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'default']),
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
