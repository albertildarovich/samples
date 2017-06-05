import * as _ from 'lodash';
import queryString from 'query-string';

export function getKeyForQuery(query) {
  return _.isEmpty(query) ?
  // TODO wtf why not as exported constant?
    `all` :
    queryString.stringify(query);
}

export function getSortFieldsFromQuery(query, sortParam) {
  const sortParamValue = query[sortParam];
  const [
    orderBy,
    sortDirection,
  ] = sortParamValue ?
    sortParamValue.split(/(Asc|Desc)$/) :
    [];
  return {
    orderBy,
    sortDirection: _.toLower(sortDirection),
  };
}

export function getSortQueryParam(fieldName, sortDirection) {
  return `${fieldName}${_.capitalize(sortDirection)}`;
}

export function removePageParam(query, pageParam) {
  delete query[pageParam];
  return query;
}

export function setSortParamToQuery(search, sortParam, fieldName, sortDirection) {
  const query = queryString.parse(search);
  query[sortParam] = getSortQueryParam(fieldName, sortDirection);
  return query;
}

export function setSortParamToSearch(search, sortParam, fieldName, sortDirection) {
  const query = queryString.parse(search);
  query[sortParam] = getSortQueryParam(fieldName, sortDirection);
  return `?${queryString.stringify(query)}`;
}
