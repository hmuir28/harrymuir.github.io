import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import data from 'components/Data';

import styles from 'styles/Landing.module.css';

const withMainTemplateWrapper = ({ WrappedComponent, position }) => () => (
  <div className={styles.App}>
    <Header name={data.name} contactEmail={data.contactEmail} />
    <WrappedComponent />
    <Footer position={position} />
  </div>
);

export default withMainTemplateWrapper;
