import { connect } from 'react-redux';
import classNames from 'classnames';
import { push } from 'react-router-redux';
import Reports from '../components/Reports';
import { DateTimeEl } from '../../../components/MITable/ColumnComponents';
import DownloadEl from './DownloadElContainer';
import { reportsApiActions, setPage, reportsTemplatesActions } from '../../../modules/reports';
import { OFFSET_PAGINATION_PARAM } from '../../../containers/Pagination';
import { getEntitiesForApi } from '../../../store/selectors/api';
import { REPORTS_CHANGE_CURRENT_TEMPLATE } from '../modules/reportsReducer';

const columnMetadata = [
  {
    name: `createDate`,
    path: `createDate`,
    sortable: false,
    displayName: `Создан`,
    customComponent: DateTimeEl,
    emptyValue: `Не указано`,
    style: {
      width: 110,
    },
  },
  {
    name: `period`,
    path: `name`,
    displayName: `Название`,
    emptyValue: `Не указано`,
    style: {
      minWidth: 130,
    },
  },
  {
    name: `download`,
    path: `id`,
    style: {
      width: 130,
    },
    customComponent: DownloadEl,
    emptyValue: `Ссылка недоступна`,
    displayName: `Скачать`,
  },
];

function mapStateToProps(state) {
  const { reports, location, routing, session } = state;
  const templatesPanelClass = classNames(`b-reports-templates`);
  return {
    location,
    locationQuery: routing.locationBeforeTransitions.query,
    instanceId: `reports`,
    entity: `reports`,
    countable: false,
    apiActions: reportsApiActions,
    templatesPanelClass,
    setPage,
    columnMetadata,
    token: session.token,
    queryParams: [
      `orderBy`,
      `templateUuid`,
      `limit`,
      `offset`,
    ],
    sortParam: `orderBy`,
    pageParam: OFFSET_PAGINATION_PARAM,
    currentTemplate: reports.currentTemplate,
    limit: 20,
    tabs: getEntitiesForApi(state, `templates`, `all`),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchReports: query => dispatch(reportsApiActions.fetch(query)),
    deleteReports: body => dispatch(reportsApiActions.delete(body)),
    fetchTemplates: () => dispatch(reportsTemplatesActions.fetch()),
    setCurrentTemplate: (template) => {
      if (template) {
        const { pathname } = location;
        dispatch(push({
          pathname,
          query: { templateUuid: template.code },
        },
        ));
        dispatch(
          {
            type: REPORTS_CHANGE_CURRENT_TEMPLATE,
            template,
          },
        );
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports);
