import * as React from 'react';
import './checkbox.less';

const classNames = require(`classnames`);
const _ = require(`lodash`);

class CheckBox extends React.Component {
  constructor() {
    super(...{});
    this.onClick = (e) => {
      e.stopPropagation();
      this.props.onChange();
    };
  }
  render() {
    const checked = !!this.props.checked;
    return (
      <div
        className={classNames(`checkbox-component`, this.props.className)}
        onClick={this.onClick} {..._.omit(this.props, [`checked`, `onChange`, `className`])}
      >
        <div className={classNames(`checkbox`, { checked })} />
        {this.props.children}
      </div>);
  }
}
CheckBox.defaultProps = {
  checked: false,
};
export default CheckBox;
