import React from 'react';

import data from 'components/Data';
import styles from 'styles/Resume.module.css';
import withSpaceWrapper from 'components/wrappers/WithSpaceWrapper';

const { studies, studyTitle } = data;

const Study = () => (
  <section className={styles.resumeSection}>
    <h1>{studyTitle}</h1>
    <div className={styles.workContainer}>
      {studies.map(({ logo, university, career, date }, index) => (
        <div
          className={styles.cardContainer}
          key={index}
        >
          
          <img src={logo} alt="university" />
          <h4>{university}</h4>
          <div>
            <span className={styles.itemValue}>{career}</span>
          </div>
          <div>
            <span className={styles.itemLabel}><b>{date.label}</b></span>
            <span className={styles.itemValue}>{date.value}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default withSpaceWrapper(Study);
