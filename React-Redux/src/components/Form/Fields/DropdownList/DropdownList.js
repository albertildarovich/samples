import React from 'react';
import { DropdownList as DropdownListWidget } from 'react-widgets';

import './DropdownList.less';

export default function DropdownList({ data, input, title }) {
  const onChange = ({ value }) => {
    if (value !== input.value) {
      input.onChange(value);
    }
  };
  return (
    <div>
      <div className='b-title'>
        { title }
      </div>
      <div>
        <DropdownListWidget
          valueField='value'
          textField='name'
          defaultValue={data[0]}
          onChange={onChange}
          data={data}
          value={input.value || `-`}
        />
      </div>
    </div>
  );
}
