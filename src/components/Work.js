import React from 'react';

import styles from '../styles/Work.module.css';

const Work = ({ projects }) => (
  <div className={styles.workContainer}>
    <h1>Projects.</h1>
    <div className={styles.projectsContainer}>
      {projects.map((project) => (
      <div key={project.id}>
        <div className="image">
          <a href={project.url}>
            <img src={project.imageSrc} alt={project.title} />
          </a>
        </div>
        <div className="title">
          {project.title}
        </div>
      </div>
      ))}
    </div>
  </div>
);

export default Work;
