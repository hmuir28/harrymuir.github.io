import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import styles from 'styles/Header.module.css';

const Header = ({ contactEmail }) => {
  return (
    <header className={styles.headerContainer}>
      <Navbar expand="lg">
        <Navbar.Brand>
          <Link className={styles.navbarLink} to="/">Harry Muir</Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={[styles.navbarToggle, styles.toggleStyle]}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={styles.rightSide}>
            <Nav.Link
              className={styles.navbarLink}
              href="/about"
            >
              Resume
            </Nav.Link>
            <Nav.Link
              className={styles.navbarLink}
              href={`mailto:${contactEmail}`}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
