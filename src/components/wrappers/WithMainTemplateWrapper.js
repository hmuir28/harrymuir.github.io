import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import data from '../Data';

import styles from '../../styles/Landing.module.css';

const withMainTemplateWrapper = WrappedComponent => () => (
  <div className={styles.App}>
    <Header name={data.name} contactEmail={data.contactEmail} />
    <WrappedComponent data={data} />
    <Footer />
  </div>
);

export default withMainTemplateWrapper;
