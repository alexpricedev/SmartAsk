import React from 'react';

import logo from 'images/logo.svg';

const Header = () => (
  <header className="header">
    <img className="header-logo"
         src={logo}
         alt="SmartAsk" />
  </header>
);

export default Header;
