import { injectReducer } from 'store/reducers';

export default store => ({
  path : `reports`,

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Reports = require(`./containers/ReportsContainer`).default;
      const reducer = require(`./modules/reportsReducer`).default;

      injectReducer(store, { key: `reports`, reducer });

      cb(null, Reports);
    }, `reports`);
  },
});
