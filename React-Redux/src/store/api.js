import * as _ from 'lodash';
import { PROMISE_TYPE_SUFFIXES } from '../middleware/api';

const initialState = {};

const [requestType, successType, failureType] = PROMISE_TYPE_SUFFIXES;

export function getApiActionSuffix(actionType) {
  return actionType.split(`_`).pop();
}

export function updateEntitiesList(state = {
  isFetching: false,
  ids: [],
}, action) {
  switch (getApiActionSuffix(action.type)) {
  case requestType:
    return {...state,
      isFetching: true,
      requested: +new Date(),
    };
  case successType:
    return {...state,
      isFetching: false,
      ids: action.response.result || action.response,
      updated: +new Date(),
    };
  case failureType:
    return {...state,
      isFetching: false,
      hasError: true,
      updated: +new Date(),
    };
  default:
    return state;
  }
}

export default function apiReducer(state = initialState, action) {
  const {
    type,
    entity,
    key = `all`,
  } = action;

  if (!entity) {
    return state;
  }

  // noinspection Eslint
  switch (getApiActionSuffix(type)) {
  case requestType:
  case successType:
  case failureType:
    const entityList = state[action.entity] || {};
    entityList[key] = updateEntitiesList(entityList[key], action);
    return {
      ...state,
      [entity]: entityList,
    };
  default:
    return state;
  }
}
