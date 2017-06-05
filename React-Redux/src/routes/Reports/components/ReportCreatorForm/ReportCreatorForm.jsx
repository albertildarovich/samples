import React, { Component } from 'react';
import _ from 'lodash';
import moment from 'moment';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { CALL_API } from 'middleware/api';
import { reportsSchema, setPage } from 'modules/reports/index';
import FormGroup from 'components/Form/Fields/Group';
import { REPORTS_SET_NEW_PARAMS } from '../../modules/reportsReducer';

const DEFAULT_ERROR = `Ошибка отправки данных`;

// const mapErrors = {
//   'Report parameter value is required': `Заполните поле`,
// };

const typeToComponent = {
  year: `YearPicker`,
  datetime: `DateTimePicker`,
  int: `NumberPicker`,
};

export const computeMoment = (src, val) => {
  const parsedMeta = val.match(/(.*\d)(\w)/);
  const parsedMetaVal = parsedMeta[1];
  const parsedMetaValFactor = parsedMeta[2];
  return +moment(src).add(parsedMetaVal, parsedMetaValFactor);
};

const mapDefaults = {
  now: ({ code }) => {
    switch (code) {
    case `year`:
      return (new Date()).getFullYear();
    default:
      return +new Date();
    }
  },
  related: ({ code, type, default: defaultValueRules }, values) => {
    if (type === `datetime`) {
      const defaultRelatedParam = _.get(defaultValueRules, `param`);
      const defaultRelatedParamValue = _.get(values, defaultRelatedParam);
      if (defaultRelatedParamValue) {
        return computeMoment(defaultRelatedParamValue, defaultValueRules.value);
      }
    } else return +new Date();
  },
  constant: ({ default: defaultValue }) => _.get(defaultValue, `value`),
};

const mapCompareType = {
  now: (type) => {
    switch (type) {
    case `year`:
      return (new Date()).getFullYear();
    default:
      return new Date();
    }
  },
  related: (values, { param, value }) => {
    const p = values[param];
    if (!p) {
      return false;
    } else if (value) {
      return computeMoment(p, value);
    }
    return p;
  },
};


const LTE_ERROR = `Значение должно быть меньше или равно `;
const GT_ERROR = `Значение должно быть больше или равно `;
const GTE_ERROR = `Значение должно быть больше `;

const checkers = {
  required: ({ code, type }, values) => (
    _.has(values, code) ?
    false :
    `Заполните поле`
  ),
  lte: ({ code, type }, values, { compareTo }) => {
    const valueForCompare = mapCompareType[compareTo.type](values, compareTo);
    const currentFieldValue = values[code];
    if (!currentFieldValue) {
      return false;
    } else if (type === `datetime`) {
      const isAccepatable = moment(currentFieldValue).isSameOrBefore(moment(valueForCompare));
      return !isAccepatable && LTE_ERROR + moment(valueForCompare).format(`DD/MM/YYYY`);
    } else if (type === `year`) {
      const isAccepatable = moment().year(currentFieldValue).isSameOrBefore(moment(valueForCompare));
      return !isAccepatable && LTE_ERROR + moment(valueForCompare).format(`DD/MM/YYYY`);
    }
    return currentFieldValue <= valueForCompare;
  },
  gt: ({ code, type }, values, { compareTo }) => {
    const valueForCompare = mapCompareType[compareTo.type](values, compareTo);
    const currentFieldValue = values[code];
    if (!currentFieldValue) {
      return false;
    } else if (type === `datetime`) {
      const isAccepatable = moment(currentFieldValue).isAfter(moment(valueForCompare));
      return !isAccepatable && GT_ERROR + moment(valueForCompare).format(`DD/MM/YYYY`);
    } else if (type === `year`) {
      const isAccepatable = moment().year(currentFieldValue).isAfter(moment(valueForCompare));
      return !isAccepatable && GT_ERROR + moment(valueForCompare).format(`DD/MM/YYYY`);
    }
    return currentFieldValue > valueForCompare;
  },
  gte: ({ code, type }, values, { compareTo }) => {
    const valueForCompare = mapCompareType[compareTo.type](values, compareTo);
    const currentFieldValue = values[code];
    if (!currentFieldValue) {
      return false;
    } else if (type === `datetime`) {
      const isAccepatable = moment(currentFieldValue).isSameOrAfter(moment(valueForCompare));
      return !isAccepatable && GTE_ERROR + moment(valueForCompare).format(`DD/MM/YYYY`);
    } else if (type === `year`) {
      const isAccepatable = moment().year(currentFieldValue).isAfter(moment(valueForCompare));
      return !isAccepatable && GTE_ERROR + moment(valueForCompare).format(`DD/MM/YYYY`);
    }
    return currentFieldValue >= valueForCompare;
  },
};

function validate(values, props) {
  const parameters = props.currentTemplate.parameters;
  const errors = parameters.reduce((errors, { code, validation, type }) => {
    if (!validation || !validation.rules) return false;
    const error = _.reduce(validation.rules, (memo, rule) => {
      const checker = checkers[rule.type] || (() => false);
      const res = checker({ code, type }, values, rule);
      if (validation.type === `and`) {
        return memo || res;
      } else if (validation.type === `or`) {
        return res && memo;
      }
      return false;
    }, false);
    if (error) (errors[code] = error);
    return errors;
  }, {});
  return errors;
}

const parseToState = (value, type) => {
  switch (type) {
  case `okato`:
    return +value;
  case `created`:
    return moment(value);
  default:
    return value;
  }
};

class ReportCreatorForm extends Component {

  FormField = formField => (
    <Field
      name={formField.code}
      component={FormGroup}
      key={formField.code}
      type={typeToComponent[formField.type]}
      code={formField.code}
      data={formField.default}
      parse={parseToState}
    />
  );

  submitForm = (values) => {
    const { createReport, fetchReports, currentTemplate: { code } } = this.props;
    return createReport({ id: code, parameters: values })
      .then((response) => {
        if (response.error) {
          const errors = response.error.body || {};
          throw new SubmissionError(
            Object.assign({
              _error: DEFAULT_ERROR,
            }, errors),
          );
        } else {
          fetchReports();
        }
      });
  };

  render() {
    const { handleSubmit, currentTemplate: { parameters, nameRu }, error, submitting } = this.props;
    const { FormField } = this;
    return (
      <form onSubmit={handleSubmit(this.submitForm)}>
        <h1>{nameRu}</h1>
        {parameters.map(FormField)}
        <button
          className={`button button-blue no-icon`}
          type='submit'
          disabled={submitting}
        >Сформировать</button>
        { submitting && (<span className='submit-progress'>Формирование отчёта...</span>)}
        { error && (<span className='submit-error'>{error}</span>) }
      </form>
    );
  }
}

export function mapStateToProps({ reports: { currentTemplate }, form }) {
  const parameters = Object.assign({}, currentTemplate.parameters);
  const registeredFields = _.get(form, `ReportCreator.registeredFields`) || [];
  const initialValues = _.pick(_.get(form, `ReportCreator.initial`), _.keys(registeredFields));
  _.forEach(parameters, (val) => {
    const defaultToValue = mapDefaults[val.default.type];
    if (defaultToValue && !initialValues[val.code]) initialValues[val.code] = defaultToValue(val, initialValues);
  });
  return {
    currentTemplate,
    initialValues,
  };
}
export function mapDispatchToProps(dispatch, ownProps) {
  const { fetchReports, locationQuery, queryParams, limit, pageParam } = ownProps;
  const query = _.pick(locationQuery, queryParams);
  const currentPage = locationQuery[pageParam] || 1;
  setPage(query, currentPage, limit);
  return {
    createReport: report => dispatch({
      type: `REPORTS_CREATE`,
      [CALL_API]: {
        url: `/reports/${report.id}`,
        options: {
          method: `POST`,
          body: report.parameters,
          schema: reportsSchema,
        },
        entity: `reports`,
      },
    }),
    fetchReports: () => fetchReports(query),
    setDateTime: (val, type) => dispatch(
      {
        type: REPORTS_SET_NEW_PARAMS,
        parameters: {
          [type]: +val,
        },
      },
    ),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(reduxForm({
  form: `ReportCreator`,
  validate,
  enableReinitialize: true,
})(ReportCreatorForm));
