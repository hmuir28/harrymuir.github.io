import React from 'react';
import Header from './Header';
import Home from './Home';
import Work from './Work';
import Contact from './Contact';

import data from './Data';

const Landing = () => (
  <div className="App">
    <Header name={data.name} contactEmail={data.contactEmail} />
    <Home name={data.landingPageName} paragraph = {data.landingPagePara} authorImage={data.landingPageImage} />
    <Work projects={data.projects} />
    <Contact contactEmail={data.contactEmail} contactPara= {data.contactPara} socialLinks = {data.social} />
  </div>
);

export default Landing;
