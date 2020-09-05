import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Home from './Home';

import data from './Data';

import styles from '../styles/Landing.module.css';

const Landing = () => (
  <div className="App">
    <Header name={data.name} contactEmail={data.contactEmail} />
    <Container fluid className={styles.landingContainer}>
      <Home name={data.landingPageName} paragraph={data.landingPagePara} authorImage={data.landingPageImage} />
    </Container>
  </div>
);

export default Landing;
