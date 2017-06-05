import 'isomorphic-fetch';
import { normalize, schema } from 'normalizr';
import * as _ from 'lodash';
import queryString from 'query-string';
import URL from 'url-parse';

export const PROMISE_TYPE_SUFFIXES = [`PENDING`, `SUCCESS`, `ERROR`];

export const API_DOMAIN = __API__ || API_DOMAIN_CONF;
export const API_ROOT = `http://${API_DOMAIN}`;

function callApi(url, options) {
  const fullUrl = !(url.match(/^http(s)?:\/\//))
    ?
    API_ROOT + url
    :
    url;

  options = Object.assign({}, options, {
    credentials: `include`,
  });

  options.headers = Object.assign(options.headers || {}, {
    Accept: `application/json`,
    'Content-Type': `application/json`,
  });

  if (options.body && (typeof options.body === `object`)) {
    options.body = JSON.stringify(options.body);
  }

  return fetch(fullUrl, options)
    .then(response =>
      response.json().then(json => ({
        json,
        response,
      })),
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(Object.assign(json, { code: response.status }));
      }

      if (options.schema) {
        json = normalize(json, _.isArray(json)
          ?
          new schema.Array(options.schema)
          :
          options.schema);
      }

      return json;
    });
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol(`Call API`);

// noinspection Eslint
export default store => next => (action) => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === `undefined`) {
    return next(action);
  }

  const { url, query = {}, options, then } = callAPI;

  const { pathname, query: querystring } = URL(url);

  Object.assign(query,
    queryString.parse(querystring),
    {
      token: store.getState().session.token,
      force: true,
      lang: `ru`,
    },
  );

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data, _.pick(action[CALL_API], [`entity`, `key`]));
    finalAction[CALL_API] = undefined;
    return finalAction;
  }

  const [requestType, successType, failureType] = PROMISE_TYPE_SUFFIXES.map(suffix => `${action.type}_${suffix}`);

  next(actionWith({ type: requestType }));

  return callApi(`${pathname}?${queryString.stringify(query)}`, options).then(
    response => next(actionWith({
      response,
      type: successType,
    })),
    error => next(actionWith({
      type: failureType,
      error,
    })),
  ).then(then);
};
