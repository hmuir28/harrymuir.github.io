import React from 'react';

import data from '../Data';
import styles from '../../styles/Resume.module.css';
import withSpaceWrapper from '../wrappers/WithSpaceWrapper';

const { jobs, workTitle } = data;

const Work = () => (
  <section className={styles.resumeSection}>
    <h1>{workTitle}</h1>
    <div className={styles.workContainer}>
      {jobs.map(({ company, description, mainAchievement, position, since }, index) => (
        <div
          className={styles.cardContainer}
          key={index}
        >
          <h4>{company}</h4>
          <div>
            <span className={styles.itemLabel}><b>{position.label}</b></span>
            <span className={styles.itemValue}>{position.value}</span>
          </div>
          <div>
            <span className={styles.itemLabel}><b>{since.label}</b></span>
            <span className={styles.itemValue}>{since.value}</span>
          </div>
          <div>
            <span className={styles.itemLabel}><b>{description.label}</b></span>
            <span className={styles.itemValue}>{description.value}</span>
          </div>
          <div>
            <span className={styles.itemLabel}><b>{mainAchievement.label}</b></span>
            <span className={styles.itemValue}>{mainAchievement.value}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default withSpaceWrapper(Work);
