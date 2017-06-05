import React, { Component } from 'react';
import classNames from 'classnames';
import { SelectList as SelectListWidget } from 'react-widgets';
import _ from 'lodash';
import SelectListItem from './SelectListItem';

import './SelectList.less';

class SelectList extends Component {
  onChange = (value) => {
    const { onChange } = this.props.input;

    let ids = value.map(item =>
                        _.isObject(item)
                          ? _.toString(item.id)
                          : item,
    );
    ids = _.uniq(ids);
    onChange(ids);
  }

  render() {
    const {
            data,
            input,
            title,
            multicolon,
            multiple,
          } = this.props;
    const {
            onChange,
          } = this;
    const selectlistClass = classNames(`b-selectlist`, { multicolon });
    return (
      <div>
        <div className='b-title'>
          { title }
        </div>
        <div className={selectlistClass}>
          <SelectListWidget
            valueField='id'
            value={input.value || []}
            onChange={onChange}
            data={data}
            itemComponent={SelectListItem}
            multiple={multiple}
          />
        </div>
      </div>
    );
  }
}

export default SelectList;
