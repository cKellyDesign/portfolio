import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './header.scss'

export const Header = () => (
  <header>
    <h1 className="site-header">Conor Kelly</h1>
    <span className="sub-header">Designer / Developer / Leader</span>
    <nav><ul className="social-links">
      <li><a href="mailto:ckelly@ckellydesign.net" title="Email" target="_blank">
        <FontAwesomeIcon icon={faEnvelope} />{`ckelly  at  ckellydesign  net`}
      </a></li>
      <li><a href="https://github.com/cKellyDesign" title="GitHub" target="_blank">
        <FontAwesomeIcon icon={faGithub} />{`ckellydesign`}
      </a></li>
      <li><a href="https://www.linkedin.com/in/ckellydesign/" title="LinkedIn" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} />{`ckellydesign`}
      </a></li>
      <li><a href="http://assets.ckellydesign.net/ConorKelly_Resume.pdf" title="Resume" target="_blank">
        <FontAwesomeIcon icon={faFilePdf} />{`Resume`}
      </a></li>
    </ul></nav>
  </header>
);
