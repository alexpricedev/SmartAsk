import React from 'react';

import logo from 'images/logo.svg';

const Header = () => (
  <header className="header">
    <a href="/"
       title="Go home">
      <img className="header-logo"
           src={logo}
           alt="SmartAsk" />
    </a>
  </header>
);

export default Header;
