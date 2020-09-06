import React from 'react';
import data from '../Data';

import styles from '../../styles/resume/AboutMe.module.css';;

const { aboutMeTitle, aboutMe } = data;

const AboutMe = () => (
  <div className={styles.aboutContainer}>
    <h1>{aboutMeTitle}</h1>
    {aboutMe.map((line) => (
      <p>
        {line}
      </p>
    ))}
  </div>
);

export default AboutMe;
