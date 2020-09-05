import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Header.module.css';

const Header = ({ contactEmail }) => (
  <div className={styles.headerContainer}>
    <nav>
      <div>
        <ul>
          <li><Link to="/">Harry Muir</Link></li>
        </ul>
      </div>
      <div className={styles.rightSide}>
        <ul>
          <li><Link to="/about">Resume</Link></li>
          <li><a href={`mailto:${contactEmail}`}>Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
