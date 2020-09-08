import React from 'react';
import { Container } from 'react-bootstrap';

import data from 'components/Data';
import HomeMainPanel from 'components/HomeMainPanel';
import styles from 'styles/Landing.module.css';

const Landing = () => (
  <Container fluid className={styles.landingContainer}>
    <HomeMainPanel
      name={data.landingPageName}
      paragraph={data.landingPageTo}
      authorImage={data.landingPageImage}
    />
  </Container>
);

export default Landing;
