import React from 'react';

import styles from '../styles/Home.module.css';

const Home = ({ name, paragraph, authorImage }) => (
  <div>
    <div className={styles.homeContainer}>
      <div className={styles.homeHeadWrapper}>
      <h1> Hello I 'm <br></br> <span>{name}</span></h1>
      <p>{paragraph}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={authorImage} alt="author" />
        <div className="bg" />
      </div>
    </div>
  </div>
);

export default Home;
