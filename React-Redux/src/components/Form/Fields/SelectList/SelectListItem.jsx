import React from 'react';
import classNames from 'classnames';
import './SelectListItem.less';

const SelectListItem = ({ item: { name, color } }) => {
  const hexColor = `#${color}`;
  const white = hexColor === `#ffffff`;
  return (
    <Status
      name={name}
      color={hexColor}
      white={white}
    />
  );
};

export function Status({ name, color, white, cssClass }) {
  return (
    <div className={cssClass} >
      <span
        className={classNames(`b-selectlist-item`, { bordered: white })}
        style={{ backgroundColor: color }}
      >
        {name}
      </span>
    </div>
  );
}

export default SelectListItem;
