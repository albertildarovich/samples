import React from 'react';
import '../../styles/main.less';

export const CoreLayout = ({ children }) => (
  <div className='core-layout'>
    {children}
  </div>
);

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired,
};
export default CoreLayout;
