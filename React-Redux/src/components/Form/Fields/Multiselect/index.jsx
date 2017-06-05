import React from 'react';
import 'react-widgets/lib/less/react-widgets.less';
import { Multiselect } from 'react-widgets';
import _ from 'lodash';
import './multiselect.less';

class FormMultiselect extends React.Component {
  constructor() {
    super();
    this.messages = {
      createNew: `(Создать новое значение)`,
      emptyList: `Список пуст`,
      emptyFilter: `Ничего не найдено`,
    };
  }
  onChange = (value) => {
    const { input } = this.props;
    let parsedValue = value.map(item => _.isObject(item)
        ? item.id
        : parseInt(item, 10));
    parsedValue = _.uniq(parsedValue);
    input.onChange(parsedValue);
  };
  render() {
    const {
      input,
      title,
      placeholder,
    } = this.props;
    let { data } = this.props;
    const { onChange } = this;

    const multiSelectClassName = `${input.name}-class multiselect-component`;

    data = data || [];

    return (<div className={multiSelectClassName}>
      <div className='b-title'>
        {title}
      </div>
      <Multiselect
        value={input.value || []}
        valueField='id'
        onChange={onChange}
        messages={this.messages}
        data={data}
        placeholder={placeholder}
        {..._.omit(this.props, [
          `input`,
          `meta`,
          `handleSubmit`,
          `lineBreak`,
          `autocompleteData`,
          `data`,
          `searchTerm`,
          `changeSearchTerm`])}
      />
    </div>);
  }
}

FormMultiselect.defaultProps = {
  data: [],
  valueField: `id`,
  textField: `name`,
  searchTerm: ``,
};

export default FormMultiselect;
