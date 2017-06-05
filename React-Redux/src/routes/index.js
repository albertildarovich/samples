import StreetSubRoutes from './Streets/routes';
import CoreLayout from '../layouts/CoreLayout';
import LoginRoute from './Authorization';
import LoginLayout from '../layouts/LoginLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import { checkAuthOnChange, checkAuthOnEnter } from './Authorization/modules/checkAuth';
import StreetsRoute from './Streets';
import ReportsRoute from './Reports';

export const Routes = store => ({
  onEnter     : checkAuthOnEnter(store),
  onChange    : checkAuthOnChange(store),
  component   : CoreLayout,
  childRoutes : [
    {
      path        : `/`,
      indexRoute  : StreetsRoute(store),
      component   : DashboardLayout,
      childRoutes : [
        StreetSubRoutes(store),
      ],
    },
    {
      component   : LoginLayout,
      childRoutes : [
        LoginRoute(store),
      ],
    },
    {
      component   : DashboardLayout,
      childRoutes : [
        ReportsRoute(store),
      ],
    },
  ],
});

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default Routes;
