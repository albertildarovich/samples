// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------
export const REPORTS_CHANGE_CURRENT_TEMPLATE = `REPORTS_CHANGE_CURRENT_TEMPLATE`;
export const REPORTS_SET_NEW_PARAMS = `REPORTS_SET_NEW_PARAMS`;
// ------------------------------------
// Reducer
// ------------------------------------
const INITIAL_STATE = {
  currentTemplate: { parameters: [] },
  newTemplateParams: {
    id: null,
    parameters: {},
  },
};

export default function reportsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REPORTS_CHANGE_CURRENT_TEMPLATE: {
    return { ...state,
      currentTemplate: action.template,
      newTemplateParams: { ...state.newTemplateParams,
        id: action.template.code,
        parameters: {},
      },
    };
  }
  case REPORTS_SET_NEW_PARAMS: {
    return { ...state,
      newTemplateParams: { ...state.newTemplateParams,
        parameters: Object.assign({}, state.newTemplateParams.parameters, action.parameters),
      },
    };
  }
  // case REPORTS_DELETE_SUCCESS: {
  //   return
  // }
  default: return state;
  }
}
