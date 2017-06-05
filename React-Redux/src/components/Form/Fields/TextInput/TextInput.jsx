import React, { Component } from 'react';

class TextInput extends Component {
  onChange = (value) => {
    const { onChange } = this.props.input;
    onChange(value);
  }

  render() {
    const {
            input,
            title,
            placeholder,
          } = this.props;
    const { onChange } = this;
    return (
      <div>
        <div className='b-title'>
          { title }
        </div>
        <div className='b-textInput'>
          <input
            onChange={onChange}
            className='form-control input-field'
            placeholder={placeholder}
            value={input.value}
          />
        </div>
      </div>
    );
  }
}

export default TextInput;
