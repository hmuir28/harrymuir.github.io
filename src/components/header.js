import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../styles/Header.module.css';

const Header = ({ contactEmail }) => (
  <div>
    <div className={styles.headerContainer}>
      <nav>
        <ul>
          <li><Link to="/about">about</Link></li>
          <li><a href={`mailto:${contactEmail}`}>contact</a></li>
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
