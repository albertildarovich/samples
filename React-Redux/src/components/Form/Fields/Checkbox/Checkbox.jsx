import React, { Component } from 'react';

class Checkbox extends Component {
  onChange = (value) => {
    const {
      input: { onChange },
      input: { checked },
      data,
    } = this.props;
    checked
    ? onChange(value)
    : onChange(data);
  }
  render() {
    const {
            title,
            input,
            data,
          } = this.props;
    const { onChange } = this;
    return (
      <div className='checkbox'>
        <label>
          <input
            type='checkbox'
            onChange={onChange}
            value={data}
            checked={input.checked}
          />
          {title}
        </label>
      </div>
    );
  }
}

export default Checkbox;
