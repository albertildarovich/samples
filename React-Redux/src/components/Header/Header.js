import * as React from 'react';
import { IndexLink } from 'react-router';
import './header.less';
import Logo from './assets/svg/logo.svg';

function Header({ user }) {
  return (<div>
    <header>
      <IndexLink className='index-link' to='/'>
        <img src={Logo} className='logo' alt='OEK logo' />
        <p className='title'>
          <span className='org-name'>АО «ОБЪЕДИНЕННАЯ ЭНЕРГЕТИЧЕСКАЯ КОМПАНИЯ» </span>
          {user && (
            <span>
              Диспетчер: {`${user.lastName || ``} ${user.firstName} ${user.patronymic || ``}`} ({user.email})
            </span>
          )}
        </p>
      </IndexLink>
    </header>
  </div>);
}

export default Header;
