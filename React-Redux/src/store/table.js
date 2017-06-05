import * as _ from 'lodash';
import { entitiesById } from 'store/selectors/api';
import classNames from 'classnames';
import * as queryString from 'query-string';

export const TABLE_TOGGLE_ROW = `TABLE_TOGGLE_ROW`;
export const TABLE_TOGGLE_ALL = `TABLE_TOGGLE_ALL`;
export const TABLE_RESET_ALL = `TABLE_RESET_ALL`;

export function toggleRow(id) {
  return {
    type: TABLE_TOGGLE_ROW,
    id,
  };
}

export function toggleAll(ids, isChecked) {
  return {
    type: TABLE_TOGGLE_ALL,
    ids,
    isChecked,
  };
}

export function resetAll() {
  return {
    type: TABLE_RESET_ALL,
  };
}

export function selectedObj(state, instanceId) {
  return state.table[instanceId].selected;
}

export function getSelectedForPage(state, instanceId, dataIdsObj) {
  const selected = selectedObj(state, instanceId);
  const selectedObjForPage = _.pickBy(selected, (val, id) => dataIdsObj[id]);
  return _.keys(selectedObjForPage);
}

export function getStatusesById(state, streets) {
  return streets.map(id => entitiesById(state, `streets`, id).status);
}

const initialState = {
  selected: {},
};

function removeSelected(isSelected, selected, id) {
  if (isSelected) {
    delete selected[id];
  } else {
    selected[id] = true;
  }
}

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
  case TABLE_TOGGLE_ROW: {
    const { selected } = state;
    const { id } = action;
    const isSelected = selected[id];
    const newSelected = Object.assign({}, selected);
    removeSelected(isSelected, newSelected, id);
    return {
      ...state,
      selected: newSelected,
    };
  }
  case TABLE_TOGGLE_ALL: {
    const { selected } = state;
    const { ids, isChecked } = action;

    const newSelected = {
      ...selected,
    };

    ids.forEach(id => removeSelected(isChecked, newSelected, id));

    return {
      ...state,
      selected: newSelected,
    };
  }
  case TABLE_RESET_ALL: {
    return initialState;
  }
  default:
    return state;
  }
}
