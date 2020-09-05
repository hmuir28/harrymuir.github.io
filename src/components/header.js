import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ contactEmail }) => (
  <div>
    <div className="header_container">
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
