import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import multireducer from 'multireducer';
import { dictionariesReducer } from 'modules/Dictionaries';
import autocompleteReducer from 'modules/Autocomplete';
import dateFilterReducer from 'modules/DateFilter';
import quickViewReducer from 'modules/QuickView';
import notificationReducer from 'modules/Notifications';
import tabReducer from 'modules/Tab';
import multiLightBoxReducer from 'modules/lightbox';
import authReducer from '../modules/Autorization';
import entitiesReducer from "./entities";
import leftPanelReducer from './leftPanelStore';
import apiReducer from './api';
import categoriesReducer from './categoriesStore';
import tableReducer from './table';

export const makeRootReducer = asyncReducers => combineReducers({
  entities: entitiesReducer,
  api: apiReducer,
  table: multireducer({
    streets: tableReducer,
    reports: tableReducer,
  }),
  lightBox: multiLightBoxReducer,
  tab: tabReducer,
  form: reduxFormReducer,
  session: authReducer,
  routing: routerReducer,
  dictionaries: dictionariesReducer,
  leftPanel: leftPanelReducer,
  categories: categoriesReducer,
  autocomplete: autocompleteReducer,
  dateFilter: dateFilterReducer,
  notifications: notificationReducer,
  quickView: quickViewReducer,
  ...asyncReducers,
});

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
