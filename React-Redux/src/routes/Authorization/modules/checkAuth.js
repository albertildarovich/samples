import * as queryString from 'query-string';
import { refreshToken as refreshTokenFun, LOGIN_ROUT } from '../../../modules/Autorization';

const noAuthRoutes = {
  '/login': true,
};

function checkAuth(nextState, replace, store, callback) {
  const { location: { pathname } } = nextState;
  if (!noAuthRoutes[pathname]) {
    const { session: { token } } = store.getState();
    const isLoggedIn = token && token !== null && typeof token !== `undefined`;
    if (!isLoggedIn) {
      replace(`${LOGIN_ROUT}?${queryString.stringify({ from: location.pathname })}`);
      return callback();
    }
  }
  return callback();
}

export function checkAuthOnChange(store) {
  return (prevState, nextState, replace, callback) =>
    checkAuth(nextState, replace, store, callback);
}

export function checkAuthOnEnter(store) {
  const { session: { ttl, refreshToken } } = store.getState();
  if (refreshToken) {
    store.dispatch(refreshTokenFun());
    setInterval(() => {
      store.dispatch(refreshTokenFun());
    }, (ttl / 2) * 1000);
  }
  return (nextState, replace, callback) =>
    checkAuth(nextState, replace, store, callback);
}
