import { connect } from 'react-redux';
import * as React from 'react';
import * as _ from 'lodash';
import { push } from 'react-router-redux';
import * as queryString from 'query-string';
import Pagination from 'components/Pagination';
import { getKeyForQuery } from '../../utils/query';
import { COUNT_DETECTOR, REPORTS_DETECTOR } from '../../utils/crud/action-creators';

export const DEFAULT_PAGINATION_PARAM = `p`;
export const OFFSET_PAGINATION_PARAM = `offset`;

class PaginationContainer extends React.Component {
  componentWillMount() {
    const {
      loadCount,
      query,
      countable,
    } = this.props;
    if (countable) {
      loadCount(query);
    }
  }
  componentWillReceiveProps(nextProps) {
    const {
      loadCount,
      countable,
    } = this.props;

    const {
      query,
      count,
    } = nextProps;
    if (!count && countable) {
      loadCount(query);
    }
  }

  render() {
    const { onPageClick, currentPage, limit, countable, count } = this.props;

    return (
      <Pagination
        {...{ onPageClick, currentPage, limit, countable, count: count && count.ids }}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const {
    pageParam,
    limit,
    queryParams,
    location,
    setPage,
    entity,
    countable,
  } = ownProps;

  const currentPage = state.routing.locationBeforeTransitions.query[pageParam] || 1;
  const reports_code = state.reports && state.reports.currentTemplate && state.reports.currentTemplate.code;
  const query = _.pick(location && location.query, queryParams);
  const getKey = getKeyForQuery(setPage(query, currentPage, limit));
  const key = countable ?
    COUNT_DETECTOR + getKey :
    getKey + REPORTS_DETECTOR + reports_code;
  const entities = state.api[entity];

  return {
    currentPage,
    limit,
    query,
    count: entities && entities[key],
    countable,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  const {
    pageParam,
    apiActions,
  } = ownProps;

  return {
    loadCount: (query) => {
      dispatch(apiActions.count(query));
    },
    onPageClick: (currentPage) => {
      const {
        pathname,
        search,
      } = location;

      dispatch(push({
        pathname,
        query: {
          ...queryString.parse(search),
          [pageParam]: currentPage,
        },
      }));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);
