import React from 'react';
import SkillBar from 'react-skillbars';

import data from 'components/Data';
import styles from 'styles/Resume.module.css';
import withSpaceWrapper from 'components/wrappers/WithSpaceWrapper';

const { categories, skillTitle } = data;

const colors = {
  bar: '#3498db',
  title: {
    text: '#fff',
    background: '#2980b9',
  }
}

const Skills = () => (
  <section className={styles.resumeSection}>
    <h1>{skillTitle}</h1>
    <div className={styles.skillsContainer}>
      {Object.keys(categories).map((key, index) => (
        <div
          className={styles.cardContainer}
          key={index}
        >
          <h4>{categories[key].category}</h4>
          <div>
            <SkillBar skills={categories[key].skills} colors={colors} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default withSpaceWrapper(Skills);
