import React from 'react';

import data from 'components/Data';
import styles from 'styles/Resume.module.css';;

const { aboutMeTitle, aboutMe } = data;

const AboutMe = () => (
  <div className={styles.resumeSection}>
    <h1>{aboutMeTitle}</h1>
    {aboutMe.map((line, index) => (
      <p key={index}>
        {line}
      </p>
    ))}
  </div>
);

export default AboutMe;
