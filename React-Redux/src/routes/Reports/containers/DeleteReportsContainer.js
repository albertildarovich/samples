import { connect } from 'react-redux';
import _ from 'lodash';
import { CALL_API } from 'middleware/api';
import { reportsSchema, setPage } from "../../../modules/reports/index";
import DeleteReports from '../components/DeleteReports';
import { selectedObj } from '../../../store/table';

export function mapStateToProps(state) {
  return {
    selectedIds: (_.keys(selectedObj(state, `reports`))).map(Number),
  };
}
export function mapDispatchToProps(dispatch, ownProps) {
  const { fetchReports, locationQuery, queryParams, limit, pageParam } = ownProps;
  const query = _.pick(locationQuery, queryParams);
  const currentPage = locationQuery[pageParam] || 1;
  setPage(query, currentPage, limit);
  return {
    deleteReports: selectedIds => dispatch({
      type: `REPORTS_DELETE`,
      [CALL_API]: {
        url: `/reports`,
        options: {
          method: `PATCH`,
          body: {
            ids: selectedIds,
          },
          schema: reportsSchema,
        },
        entity: `reports`,
      },
    }).then(() => fetchReports(query)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeleteReports);
