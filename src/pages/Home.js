import React from 'react';
import WithMainTemplateWrapper from 'components/wrappers/WithMainTemplateWrapper';
import Landing from 'components/Landing';

const Home = (props) => (<Landing {...props} />);

export default WithMainTemplateWrapper(Home);
