import React from 'react';
import WithMainTemplateWrapper from 'components/wrappers/WithMainTemplateWrapper';
import Landing from 'components/Landing';

const Home = () => (
  <Landing />
);

export default WithMainTemplateWrapper({
  WrappedComponent: Home,
  position: 'absolute',
});
