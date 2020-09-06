import React from 'react';
import { Container } from 'react-bootstrap';
import HomeMainPanel from './HomeMainPanel';

import styles from '../styles/Landing.module.css';

const Landing = ({ data }) => (
  <Container fluid className={styles.landingContainer}>
    <HomeMainPanel name={data.landingPageName} paragraph={data.landingPagePara} authorImage={data.landingPageImage} />
  </Container>
);

export default Landing;
