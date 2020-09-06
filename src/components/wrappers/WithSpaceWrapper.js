import React from 'react';

import styles from '../../styles/Resume.module.css';

const withSpaceWrapper = WrappedComponent => () => (
  <div>
    <div className={styles.space} />
    <WrappedComponent />
  </div>
);

export default withSpaceWrapper;
