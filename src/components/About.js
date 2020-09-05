import React from 'react';
import Header from './Header';
import Contact from './Contact';
import data from './Data';

const About = () => (
  <div>
    <Header name={data.name} contactEmail={data.contactEmail} />
    <div className="about_container">
      <h1>{data.aboutTitle}</h1>
      <p>{data.aboutPara}</p>
      <div className="about_contact">
        <Contact
          contactEmail={data.contactEmail}
          contactPara={data.contactPara}
          socialLinks={data.social}
        />
      </div>
    </div>
  </div>
);

export default About;
