import React from 'react';
import Notification from 'containers/NorificationsContainer';
import { connect } from 'react-redux';
import Header from 'components/Header';
import { getCurrentUser } from 'modules/Autorization';
import DictionariesContainer from 'containers/DictionariesContainer';
import LeftPanelContainer from 'containers/LeftPanelContainer';
import 'styles/main.less';
import './DashboardLayout.less';

export const DashboardLayout = ({ children, dictionariesLoaded, user }) => (
  <div>
    <Notification />
    <Header user={user} />
    <div className='b-left-panel'>
      <LeftPanelContainer />
    </div>
    <div className='b-dashboard'>
      <DictionariesContainer />
      {dictionariesLoaded
        ? children
        : ``}
    </div>
  </div>
);

function mapStateToProps(state) {
  return {
    dictionariesLoaded: state.dictionaries.dictionariesLoaded,
    user: getCurrentUser(state),
  };
}

DashboardLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
};

export default connect(mapStateToProps)(DashboardLayout);
