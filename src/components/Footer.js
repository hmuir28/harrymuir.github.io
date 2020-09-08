import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import styles from 'styles/Footer.module.css';

const Footer = ({ position = null }) => (
  <footer
    className={styles.footerContainer}
    style={{ position }}
  >
    <Container>
      <Row>
        <Col md={8} className={['mx-auto', 'text-center']}>
          <span>
            ©2020 Made by <b>Harry Muir.</b>
          </span>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
