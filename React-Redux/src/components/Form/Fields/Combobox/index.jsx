import React, { Component } from 'react';
import { Combobox } from 'react-widgets';
import _ from 'lodash';
import './combobox.less';

const DEBOUNCE_TIME = 500;

class ComboboxComponent extends Component {
  constructor(props) {
    super(props);
    this.messages = {
      createNew: `(Создать новое значение)`,
      emptyList: `Список пуст`,
      emptyFilter: `Ничего не найдено`,
    };
  }

  onChange = (value = ``) => {
    const {
      autocompletePush,
      input,
    } = this.props;
    autocompletePush(value);
    value === `` && input.value ?
      input.onChange(value) :
      this.debouncedHandleData(value);
  }

  componentWillMount() {
    const { props, onChange } = this;
    if (!props.input.value) {
      onChange();
    }
  }

  onSelect = (value) => {
    const { onChange } = this.props.input;
    onChange(value);
  }

  handleData = (value) => {
    const {
      getAutocompleteData,
    } = this.props;
    const queryParams = {
      streetNameInput: value,
    };
    getAutocompleteData(queryParams);
  }

  clearStreetFilter = () => this.onChange();
  debouncedHandleData = _.debounce(value => this.handleData(value), DEBOUNCE_TIME);

  render() {
    const {
      title,
      placeholder,
      dataLoading,
      autocompleteKey,
      input,
    } = this.props;
    const {
      onChange,
      onSelect,
      clearStreetFilter,
    } = this;
    let { searchData } = this.props;
    searchData = searchData || [];
    return (
      <div>
        <div className='b-title'>
          {title}
        </div>
        <Combobox
          value={autocompleteKey || input.value}
          messages={this.messages}
          caseSensitive={false}
          onChange={onChange}
          onSelect={onSelect}
          busy={dataLoading}
          data={searchData}
          placeholder={placeholder}
        />
        {(autocompleteKey || input.value) &&
          <a onClick={clearStreetFilter} className='clear-button'>
            <i className='glyphicon glyphicon-remove' />
          </a>
        }
      </div>);
  }
}

export default ComboboxComponent;
