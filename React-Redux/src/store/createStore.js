import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import persistState from 'redux-localstorage';
import { routerMiddleware } from 'react-router-redux';
import { makeRootReducer } from './reducers';
import apiMiddleware from '../middleware/api';
import authMiddleware from '../middleware/auth';


export default (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
  const middleware = [
    thunk,
    apiMiddleware,
    routerMiddleware(browserHistory),
    authMiddleware,
  ];

    // ======================================================
    // Store Enhancers
    // ======================================================
  function _getStorageConfig() {
    return {
      key: `typescript-react-redux-seed`,
      serialize: store => store && store.session
                                   ? JSON.stringify(store.session)
                                   : store,
      deserialize: state => ({
        session: state
                 ? JSON.parse(state)
                 : {},
      }),
    };
  }

  const enhancers = [
    persistState(`session`, _getStorageConfig()),
  ];

  let composeEnhancers = compose;

  if (__DEV__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === `function`) {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }
    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );
  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept(`./reducers`, () => {
      store.replaceReducer(makeRootReducer(store.asyncReducers));
    });
  }

  return store;
};
