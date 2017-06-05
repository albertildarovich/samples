import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import Calendar from 'react-widgets/lib/Calendar';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import _ from 'lodash';
import Moment from 'moment';
import MomentLocale from 'moment/locale/ru';
import './DatePicker.less';
// workaround from docs, не удалять. http://momentjs.com/docs/#/use-it/browserify/

momentLocalizer(Moment);

class DatePickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.prepareValueForInput(props.value),
    };
  }

  componentWillMount() {
    if (!this.containerDOM) {
      this.containerDOM = document.querySelector(`.${this.props.pickerContainerClass}`);
    }

    if (!this.containerDOM) {
      this.containerDOM = document.createElement(`div`);
      this.containerDOM.className = this.props.pickerContainerClass;
      document.body.appendChild(this.containerDOM);
    }

    this.setState({
      value: this.prepareValueForInput(this.props.value),
    });
  }

  componentDidMount() {
    document.addEventListener(`scroll`, this.handleScrollThrottled, true);
    document.body.addEventListener(`focus`, this.handleFocus, true);
  }

  componentWillReceiveProps(nextProps) {
    if (!Moment(nextProps.value).isSame(this.props.value)) {
      this.setState({
        value: this.prepareValueForInput(nextProps.value),
      });
    }
  }

  componentWillUnmount() {
    document.removeEventListener(`scroll`, this.handleScrollThrottled, true);
    document.body.removeEventListener(`focus`, this.handleFocus, true);
  }

  onChange = (value) => {
    const { onChange, name } = this.props;
    onChange(Moment(value).format(`x`), name);
  }

  getPickerPositionForTarget = (target) => {
    const boundingRect = target.getBoundingClientRect();

    return {
      left: boundingRect.left,
      top: boundingRect.bottom,
    };
  }

  handleScroll = () => {
    this.closePicker();
    this.ticking = false;
  };

  handleScrollThrottled = () => {
    if (!this.ticking) {
      window.requestAnimationFrame(this.handleScroll);
    }
    this.ticking = true;
  };

  handleFocus = (e) => {
    if (!this.containerDOM.contains(e.target)) {
      this.closePicker();
    }
  };

  handlePickerChange = (date) => {
    this.setState({ value : this.prepareValueForInput(date) });
    this.onChange(date);
    this.closePicker();
  };

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  normalizeValue = (value) => {
    const momentedValue = Moment(value, [
      `DD MMM`,
      `DD MMMM`,
      `D MMM`,
      `D MMMM`,
      `DD`,
      `D`,
      `MMM`,
      `MMMM`,
      `DD.MM`,
      `DD.MM.YYYY`,
    ]);
    return momentedValue.isValid()
          ? momentedValue.toDate()
          : null;
  }

  handleInputBlur = (e) => {
    if (e.target.value !== ``) {
      this.props.onBlur(Moment(this.normalizeValue(e.target.value)).format(`x`), this.props.name);
    }
  };

  openPicker = () => {
    this.isPickerVisible = true;
    this.renderPicker();
  };

  closePicker() {
    if (!this.isPickerVisible) {
      return;
    }
    this.isPickerVisible = false;
    this.renderPicker();
  }

  prepareValueForInput = (value) => {
    if (!value) {
      return ``;
    }
    let momentedValue;
    if (value instanceof Date) {
      momentedValue = Moment(value);
    } else {
      momentedValue = Moment(parseInt(value, 10)).format(`x`);
    }

    if (momentedValue.isValid()) {
      return momentedValue.format(this.props.inputDateFormat);
    }
    return ``;
  }

  renderPicker() {
    const position = this.getPickerPositionForTarget(ReactDOM.findDOMNode(this));
    ReactDOM.render(
      <Calendar
        {..._.omit(this.props, [
          `pickerContainerClass`,
          `pickerHiddenClass`,
          `inputDateFormat`,
          `pickerClassName`,
          `placeholder`,
          `className`,
          `onBlur`,
          `input`,
          `meta`,
          `fields`,
        ])}
        className={classNames(
                this.props.pickerClassName,
                !this.isPickerVisible && this.props.pickerHiddenClass,
            )}
        style={position}
        onChange={this.handlePickerChange}
      />,
        this.containerDOM,
    );
  }

  render() {
    return (
      <div
        className='datePicker-input-cont'
        tabIndex={-1}
      >
        <input
          type='text'
          tabIndex={0}
          className='datePicker-input form-control'
          onBlur={this.handleInputBlur}
          value={this.state.value}
          onChange={this.handleInputChange}
          {..._.omit(this.props, [
            `meta`,
            `input`,
            `fields`,
            `className`,
            `pickerContainerClass`,
            `pickerHiddenClass`,
            `pickerClassName`,
            `inputDateFormat`,
            `value`,
            `min`,
            `max`,
            `onChange`,
            `onBlur`,
          ])}
        />
        <button
          onClick={this.openPicker}
          className='date-picker__button'
        >
          <span
            className='date-picker__select'
          />
        </button>
      </div>
    );
  }
}

DatePickerComponent.defaultProps = {
  pickerContainerClass: `date-picker__picker-container`,
  pickerHiddenClass: `date-picker__picker_hidden`,
  pickerClassName: `date-picker__picker`,
  inputDateFormat: `DD MMM`,
  onChange: _.noop,
  onBlur: _.noop,
};

export default DatePickerComponent;
