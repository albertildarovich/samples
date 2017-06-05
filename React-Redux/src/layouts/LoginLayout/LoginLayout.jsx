import React from 'react';
import './LoginLayout.less';
import Logo from '../../assets/svg/login_logo.svg';

export const LoginLayout = ({ children }) => (
  <div className='b-login'>
    <div className='b-login-logo'>
      <img src={Logo} className='b-logo' alt='' />
    </div>
    <div className='b-login-cont'>
      <div className='b-login-header'>
        <h4 className='b-login-title'>Вход</h4>
      </div>
      <div className='b-login-body'>
        {children}
      </div>
    </div>
    <p className='b-login-footer'>
      ©
    </p>
  </div>
);

LoginLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
};
export default LoginLayout;
