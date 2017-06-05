import * as _ from 'lodash';

const initialState = {
  source: [
    `7f4904ee-799c-499f-b8c7-377c2a0fa692`,
    `7f4904ee-799c-499f-b8c7-377c2a0fa692`,
    `7f4904ee-799c-499f-b8c7-377c2a0fa692`,
  ],
};

export const dictionariesList = [`source`];

export default function entitiesReducer(state = initialState, action) {
  if (action.response && action.response.entities) {
    const entities = action.response.entities;
    const entitiesTypesList = _.union(_.keys(state), _.keys(entities));
    const newState = {};
    entitiesTypesList.forEach((type) => {
      const isDictType = dictionariesList.indexOf(type) !== -1;

      const entityState = state[type];
      const newEntityState = entities[type];
      if (newEntityState && entityState) {
        if (isDictType) {
          newState[type] = _.merge(entityState, newEntityState);
        } else {
          newState[type] = { ...entityState, ...newEntityState };
        }
      } else if (newEntityState && !entityState) {
        newState[type] = newEntityState;
      } else {
        newState[type] = entityState;
      }
    });
    return newState;
  }
  return state;
}
