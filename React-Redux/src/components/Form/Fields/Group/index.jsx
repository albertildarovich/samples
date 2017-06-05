import React from 'react';
import classNames from 'classnames';

import Multiselect from 'components/Form/Fields/Multiselect';
import Combobox from 'components/Form/Fields/Combobox';
import SelectList from 'components/Form/Fields/SelectList';
import YearPicker from 'components/Form/Fields/YearPicker';
import DateTimePicker from 'components/Form/Fields/DateTimePicker';
import FormError from 'components/Form/Fields/FormError';
import NumberPicker from 'components/Form/Fields/NumberPicker';

import './Group.less';

const components = {
  Multiselect,
  Combobox,
  SelectList,
  DateTimePicker,
  YearPicker,
  NumberPicker,
  FormError,
};

function getComponentForType(type, props) {
  return components[type] && React.createElement(components[type], props);
}

const FormGroup = (props) => {
  const { label, type, meta: { touched, error } } = props;
  const hasError = !!(touched && error);
  const className = classNames(`form-group`, { 'has-error': hasError });
  const newProps = Object.assign({}, props);

  return (
    <div className={className}>
      {label && (<label>{label}</label>) }
      <div className='field'>
        { getComponentForType(type, newProps) }
        {hasError &&
          (<FormError
            id='qa-uname-validation'
            isVisible={hasError}
          >
            { error }
          </FormError>)
        }
      </div>
    </div>
  );
};

export default FormGroup;
