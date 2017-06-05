import * as _ from 'lodash';
import { createSelector } from 'reselect';

export function getEntitiesForApi(state, entity, key) {
  if (!state.api[entity] || !state.api[entity][key]) {
    return [];
  }
  return state.api[entity][key].ids.map(id => state.entities[entity][id]);
}

export const getIds = (state, { entityType, key }) => state.api[entityType][key].ids;
export const getEntities = (state, { entityType }) => state.entities[entityType];

export const createIdsSelector = entityType =>
  (state, key) => getIds(state, { entityType, key });

export const createEntitiesSelector = entityType => state => getEntities(state, { entityType });

export const createSelectorForEntityKey = entityType => createSelector([
  createIdsSelector(entityType),
  createEntitiesSelector(entityType),
], (ids, entities) => ids.map(id => entities[id]));

export function entitiesById(state, entityType, id) {
  return _.get(state, [`entities`, entityType, id]);
}

export function entitiesNoId(state, entity, key) {
  if (!state.api[entity] || !state.api[entity][key]) {
    return [];
  }
  return state.api[entity][key].ids;
}

export function getApiState(state, entity, key) {
  return _.get(state, [`api`, entity, key]);
}
