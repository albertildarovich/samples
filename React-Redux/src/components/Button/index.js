import React from 'react';
import ClassNames from 'classnames';
import './button.less';

export default function Button({ onClick, buttonClass, iconClass, text, isDisable }) {
  return (
    // TODO wtf?
    // TODO use button component from admin project
    // eslint-disable-next-line
    <a className={ClassNames(`button`, buttonClass, {'disabled': isDisable} )} onClick={onClick}>
      <i className={iconClass} />
      {text}
    </a>
    );
}
