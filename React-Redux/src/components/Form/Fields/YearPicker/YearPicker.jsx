import React, { Component } from 'react';
import Moment from 'moment';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
import './YearPicker.less';

class YearPicker extends Component {

  getYearsList = () => {
    const currentYear = Moment().year();
    const yearsList = [];
    for (let i = currentYear - 4; i < currentYear + 1; i += 1) {
      yearsList.push(i);
    }
    return yearsList;
  }

  render() {
    const yearsList = this.getYearsList();
    return (
      <DropdownList
        className='year-picker-component'
        data={yearsList}
        defaultValue={yearsList[yearsList.length - 1]}
        onChange={value => this.props.input.onChange(value)}
      />
    );
  }
}

export default YearPicker;
