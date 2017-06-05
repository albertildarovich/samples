import { connect } from 'react-redux';
import _ from 'lodash';
import { reduxForm } from 'redux-form';
import { CALL_API } from 'middleware/api';
import { REPORTS_SET_NEW_PARAMS } from '../modules/reportsReducer';
import ReportCreatorFormComponent from '../components/ReportCreatorForm';
import { reportsSchema, setPage } from '../../../modules/reports/index';

export function mapStateToProps({ reports: { currentTemplate, newTemplateParams } }) {
  return {
    currentTemplate,
    newTemplateParams,
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
})(ReportCreatorFormComponent));
