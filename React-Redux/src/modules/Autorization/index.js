import { push } from 'react-router-redux';
import { createSelector } from 'reselect'
import _ from 'lodash';
import * as queryString from 'query-string';
import { CALL_API } from '../../middleware/api';

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_USER = `LOGIN_USER`;
export const LOGOUT_USER = `LOGOUT_USER`;
export const LOGIN_USER_OAUTH = `LOGIN_USER_OAUTH`;
export const FORM_RESET = `FORM_RESET`;

export const LOGIN_USER_PENDING = `LOGIN_USER_PENDING`;
export const LOGIN_USER_SUCCESS = `LOGIN_USER_SUCCESS`;
export const LOGIN_USER_ERROR = `LOGIN_USER_ERROR`;

export const LOGIN_ROUT = `/login`;
export const ROOT_ROUT = `/`;
// ------------------------------------
// Actions
// ------------------------------------
export function loginUser() {
  return (dispatch, getState) => {
    const { username: login, password } = getState().form.login.values || {};
    return dispatch({
      type: LOGIN_USER,
      [CALL_API]: {
        url: `/auth/token`,
        options: {
          method: `post`,
          body: { login, password },
        },
        then: (res) => {
          if (!res.error) {
            dispatch({
              type: FORM_RESET,
              form: `login`,
            });
            dispatch(push(queryString.parse(location.search).from || ROOT_ROUT));
          }
          return res;
        },
      },
    });
  };
}

export function refreshToken() {
  return (dispatch, getState) => {
    // noinspection Eslint
    const { session: { refreshToken } } = getState();
    return dispatch({
      type: `REFRESH_TOKEN`,
      [CALL_API]: {
        url: `/auth/token/refresh`,
        query: {
          refreshToken,
        },
      },
    });
  };
}

export function loginUserOAuth() {
  return (dispatch, getState) => {
    const user = {
      login: getState().form.login.values.username,
      password: getState().form.login.values.password,
    };

    return dispatch({
      type: LOGIN_USER_OAUTH,
      [CALL_API]: {
        url: `https:/localhost/auth/token`,
        options: {
          method: `post`,
          body: user,
        },
        then: (res) => {
          if (!res.error) {
            dispatch({
              type: FORM_RESET,
              form: `login`,
            });
            dispatch(push(ROOT_ROUT));
          }
          return res;
        },
      },
    });
  };
}

export function logoutUser() {
  return (dispatch, getState) => {
    dispatch({
      type: LOGOUT_USER,
      form: `login`,
    });
    return dispatch(push(`/`));
  };
}

// ------------------------------------
// Selectors
// ------------------------------------
export function getCurrentUser(state) {
  return state.session.user;
}

export function getCurrenToken(state) {
  return _.get(state, [`session`, `token`]);
}
// ------------------------------------
// Action Handlers
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
const INITIAL_STATE = {
  token: null,
  user: {},
  hasError: false,
  isLoading: false,
};

export default function sessionReducer(
  state = INITIAL_STATE,
  action = { type: ``, response: null, error: null },
  ) {
  switch (action.type) {

  case LOGIN_USER_PENDING:
    return {
      token: null,
      hasError: false,
      isLoading: true,
      errorText: null,
    };
  case LOGIN_USER_ERROR: {
    return {
      hasError: true,
      isLoading: false,
      errorText: action.error.exception || `Ошибка связи с сервером`,
    };
  }
  case LOGIN_USER_SUCCESS:
  case `REFRESH_TOKEN_SUCCESS`: {
    return Object.assign({}, state, action.response, { hasError: false, isLoading: false });
  }
  case LOGOUT_USER: {
    return INITIAL_STATE;
  }
  default: {
    return state;
  }
  }
}
