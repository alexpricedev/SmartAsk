import React from 'react';

import heart from 'images/heart.svg';
import github from 'images/github.svg';

const Footer = () => (
  <footer className="footer">
    <a href="//alexpriceonline.com"
       className="footer-link"
       target="_blank"
       title="Visit Alex Price's website (new tab)">
      Made with
      <img className="footer-link-icon"
           src={heart}
           alt="love" />
      in Bristol, UK.
    </a>
    <a href="https://github.com/alexpriceonline/SmartAsk"
       className="footer-link"
       target="_blank"
       title="View project on Github (new tab)">
      <img className="footer-link-icon mod-github"
           src={github}
           alt="Github icon" />
    </a>
  </footer>
);

export default Footer;
