import { push } from 'react-router-redux';
import HttpStatus from 'http-status-codes';
import { LOGIN_ROUT } from '../modules/Autorization';
import { PROMISE_TYPE_SUFFIXES } from './api';

export default store => next => (action) => {
  const [,, failureType] = PROMISE_TYPE_SUFFIXES;
  if (action.type.endsWith(failureType) && action.error && action.error.code === HttpStatus.UNAUTHORIZED) {
    store.dispatch(push(LOGIN_ROUT));
    return next(action);
  }
  return next(action);
};
