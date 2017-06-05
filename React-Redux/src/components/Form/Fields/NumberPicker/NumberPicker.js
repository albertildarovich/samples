import React from 'react';
import './NumberPicker.less';

const NumberPicker = props => (
  <input
    className='number-picker-component'
    defaultValue={0}
    min='0'
    onChange={value => props.input.onChange(value)}
    type='number'
  />
);

export default NumberPicker;
