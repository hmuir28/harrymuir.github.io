import React from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from '../styles/Home.module.css';

const Home = ({ name, paragraph, authorImage }) => (
  <div className={styles.homeContainer}>
    <Row>
      <Col md={8}>
        <div className={styles.homeHeadWrapper}>
          <h1> Hello I 'm <br></br> <span>{name}</span></h1>
          <p>{paragraph}</p>
        </div>
      </Col>
      <Col md={4}>
        <div className={styles.imageContainer}>
          <img src={authorImage} alt="author" />
          <div className="bg" />
        </div>
      </Col>
    </Row>
  </div>
);

export default Home;
