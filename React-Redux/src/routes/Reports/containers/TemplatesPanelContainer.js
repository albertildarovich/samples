import { connect } from 'react-redux';
import { push } from "react-router-redux";
import { REPORTS_CHANGE_CURRENT_TEMPLATE } from '../modules/reportsReducer';
import { getEntitiesForApi } from '../../../store/selectors/api';
import TemplatesPanel from "../components/TemplatesPanel";

function mapStateToProps(state) {
  return {
    tabs: getEntitiesForApi(state, `templates`, `all`),
    currentTemplate: state.reports.currentTemplate,
  };
}

export default connect(
  mapStateToProps,
)(TemplatesPanel);
