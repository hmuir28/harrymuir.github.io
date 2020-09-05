import React from 'react';
import Header from '../Header';
import Contact from '../Contact';
import data from '../Data'

import styles from '../../styles/resume/AboutMe.module.css';;

const About = () => (
  <div>
    <Header name={data.name} contactEmail={data.contactEmail} />
    <div className={styles.aboutContainer}>
      <h1>{data.aboutTitle}</h1>
      <p>{data.aboutPara}</p>
      <div className={styles.aboutContact}>
        <Contact
          contactEmail={data.contactEmail}
          contactPara={data.contactPara}
          socialLinks={data.social}
        />
      </div>
    </div>
  </div>
);

export default About;
