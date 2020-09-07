import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import data from 'components/Data';

import styles from 'styles/Landing.module.css';

const withMainTemplateWrapper = WrappedComponent => () => (
  <div className={styles.App}>
    <Header name={data.name} contactEmail={data.contactEmail} />
    <WrappedComponent data={data} />
    <Footer />
  </div>
);

export default withMainTemplateWrapper;
