import React from 'react';
import Contact from 'components/resume/Contact';
import AboutMe from 'components/resume/AboutMe';
import Work from 'components/resume/Work';
import Study from 'components/resume/Study';
import Skills from 'components/resume/Skills';
import withMainTemplateWrapper from 'components/wrappers/WithMainTemplateWrapper';

import styles from 'styles/Resume.module.css';

const Resume = () => {
  return (
    <div className={styles.resumeContainer}>
      <AboutMe />
      <Work />
      <Study />
      <Skills />
      <Contact />
    </div>
  )
};

export default withMainTemplateWrapper(Resume);
