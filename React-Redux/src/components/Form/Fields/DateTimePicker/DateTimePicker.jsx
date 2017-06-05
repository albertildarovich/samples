import * as React from 'react';
import { DateTimePicker } from 'react-widgets';
import MomentLocale from 'moment/locale/ru';
import moment from 'moment';
import './DateTimePicker.less';

const momentLocalizer = require(`react-widgets/lib/localizers/moment`);
momentLocalizer(moment);

const setTime = (old, nu) => {
  const o = old ? moment(old) : moment();
  const n = moment(nu);
  return +o.hour(n.hour()).minute(n.minute());
};

const setDate = (old, nu) => {
  const o = old ? moment(old) : moment();
  const n = moment(nu);
  return +o.year(n.year()).month(n.month()).date(n.date());
};

const renderDateFrom = ({ min, input }) => (
  <div>
    <span className='text-label'>c:</span>
    <DateTimePicker
      className={`picker-component picker-component-calendar`}
      value={new Date(input.value)}
      min={min}
      onChange={v => input.onChange(setDate(input.value, v))}
      time={false}
    />
    <span className='text-label'>в:</span>
    <DateTimePicker
      className={`picker-component picker-component-time`}
      value={new Date(input.value)}
      min={min}
      onChange={v => input.onChange(setTime(input.value, v))}
      calendar={false}
    />
  </div>
);

const renderDateTo = ({ min, input }) => (
  <div>
    <span className='text-label'>до:</span>
    <DateTimePicker
      className={`picker-component picker-component-calendar`}
      value={new Date(input.value)}
      min={min}
      onChange={v => input.onChange(setDate(input.value, v))}
      time={false}
    />
    <span className='text-label'>в:</span>
    <DateTimePicker
      className={`picker-component picker-component-time`}
      value={new Date(input.value)}
      min={min}
      onChange={v => input.onChange(setTime(input.value, v))}
      calendar={false}
    />
  </div>
);

const renderSingle = ({ min, input }) => (
  <DateTimePicker
    className={`picker-component`}
    value={new Date(input.value)}
    min={min}
    onChange={v => input.onChange(+v)}
  />
);

const typeToPicker = {
  dateFrom: props => renderDateFrom(props),
  fromLong: props => renderDateFrom(props),
  dateTo: props => renderDateTo(props),
  toLong: props => renderDateTo(props),
};

const renderPickerOfType = (code, props) => (
  typeToPicker[code] ?
  typeToPicker[code](props) :
  renderSingle(props)
);

const DateTimePickerComponent = props => (
  <div className='date-picker-component'>
    {renderPickerOfType(props.code, props)}
  </div>
);

export default DateTimePickerComponent;
