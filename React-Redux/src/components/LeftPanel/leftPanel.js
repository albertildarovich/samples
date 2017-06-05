import * as React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import Avatar from '../../containers/Avatar/avatar';
import '../Avatar/avatar.less';
import './left-panel.less';

const LeftPanelButton = ({ url, handler, title, className, isActive, isDisable, iconClass }) => (
  <li className={classNames(className, { disable: isDisable, active: isActive })}>
    <Link to={url} activeClassName='active' onClick={handler}>
      <i className={classNames(`icon-link`, iconClass)} title={title} />
    </Link>
  </li>
);

const Menu = ({ buttons, className, dispatch, children }) => (
  <ul className={className}>
    {children}
    {buttons.map(tab => (
      <LeftPanelButton
        {...tab}
        key={tab.name}
        handler={() => tab.handler && dispatch(tab.handler())}
      />
    ))}
  </ul>
);

export function LeftPanel({ tabsConfig: { topItem, bottomItem }, dispatch }) {
  return (
    <div className='left-panel'>
      <Menu buttons={topItem} className='menu-top' dispatch={dispatch}>
        <li>
          <Avatar width={30} height={30} />
        </li>
      </Menu>
      <Menu buttons={bottomItem} className='bottom-menu-items' dispatch={dispatch} />
    </div>);
}


export default LeftPanel;
