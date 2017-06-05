import React from 'react';
import classNames from 'classnames';
import './FormError.less';

export const FormError = props => (
  <span
    className={classNames(`form-error`, { isVisible: props.isVisible })}
  >
    { props.children }
  </span>
);

export default FormError;
