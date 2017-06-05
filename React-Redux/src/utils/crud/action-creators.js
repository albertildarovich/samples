import * as queryString from "query-string";
import _ from 'lodash';
import actionCrudTypesFor, { METHODS } from './action-types';
import { CALL_API } from '../../middleware/api';

const httpMethods = {
  fetch: `get`,
  create: `post`,
  update: `put`,
  patch: `patch`,
  delete: `delete`,
  count: `get`,
};
export const COUNT_DETECTOR = `count?`;
export const REPORTS_DETECTOR = `&templateUuid=`;
function mapKeys(obj, map) {
  return _.mapKeys(obj, (value, key) => (map[key] || key));
}
function actionCrudCreatorsFor(entity, url, schema, map, methods = METHODS) {
  const types = actionCrudTypesFor(entity);
  return Object.assign({ types }, methods.reduce((creators, method) => {
    creators[method] = (params, then) => {
      const options = {
        method: httpMethods[method].toUpperCase(),
        schema,
      };

      const apiParams = {
        url,
        options,
        then,
      };

      apiParams.entity = entity;

      if (typeof params === `object` && !_.isEmpty(params)) {
        apiParams.key = queryString.stringify(params);
      } else if (typeof params === `string`) {
        apiParams.key = params;
      }

      switch (method) {
      case `count`:
        if (typeof params === `object`) {
          apiParams.query = params;
        }
        apiParams.options.schema = null;
        apiParams.key = COUNT_DETECTOR + apiParams.key;
        apiParams.url += `/count`;
        break;
      case `fetch`:
      case `delete`:
        if (typeof params === `object`) {
          apiParams.query = params;
        } else if (params) {
          apiParams.url += `/${params}`;
        }
        break;
      case `update`:
      case `patch`:
        apiParams.url += `/${params.id}`;
        apiParams.options.body = map ?
            mapKeys(params, map)
            : params;
        break;
      default:
      }
      return {
        type: types[method],
        [CALL_API]: apiParams,
      };
    };
    return creators;
  }, {}));
}
export default actionCrudCreatorsFor;
