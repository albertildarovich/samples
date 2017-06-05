import React, { Component } from 'react';
import { browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

class AppContainer extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { routes, store } = this.props;
    const history = syncHistoryWithStore(browserHistory, store);

    return (
      <Provider store={store}>
        <div>
          <Router history={history}>
            {routes}
          </Router>
        </div>
      </Provider>
    );
  }
}

export default AppContainer;
