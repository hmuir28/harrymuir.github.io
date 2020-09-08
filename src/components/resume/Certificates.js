import React from 'react';

import data from 'components/Data';
import styles from 'styles/Resume.module.css';
import withSpaceWrapper from 'components/wrappers/WithSpaceWrapper';

const { certificateTitle, certificates } = data;

const Certificates = () => (
  <section className={styles.resumeSection}>
    <h1>{certificateTitle}</h1>
    <div className={styles.certificatesContainer}>
      {certificates.map((certificate, index) => (
        <div
          className={styles.cardContainer}
          key={index}
        >
          <h4>{certificate.title}</h4>
          <div>
            <span className={styles.itemLabel}><b>{certificate.instructor.label}</b></span>
            <span className={styles.itemValue}>{certificate.instructor.value}</span>
          </div>
          <div>
            <span className={styles.itemLabel}><b>{certificate.company.label}</b></span>
            <span className={styles.itemValue}>{certificate.company.value}</span>
          </div>
          <div>
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default withSpaceWrapper(Certificates);
