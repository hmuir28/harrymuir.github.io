import React from 'react';
import Contact from '../components/resume/Contact';
import AboutMe from '../components/resume/AboutMe';
import Work from '../components/resume/Work';
import withMainTemplateWrapper from '../components/wrappers/WithMainTemplateWrapper';

import styles from '../styles/Resume.module.css';

const Resume = (props) => {
  return (
    <div className={styles.resumeContainer}>
      <AboutMe {...props} />
      <Work {...props} />
      <div className={styles.aboutContact}>
        <Contact />
      </div>
    </div>
  )
};

export default withMainTemplateWrapper(Resume);
