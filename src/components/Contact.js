import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

const Contact = ({ contactEmail, contactTo, socialLinks }) => (
  <div className="contact_container">
    <h1>Get in touch.</h1>
    <p>{contactTo}</p>
    <br></br>
    <a className="email_link" href={`mailto:${contactEmail}`}>
      {contactEmail}
    </a>
    <div className="social_links">
      <ul>
        <li>
          <a href={`mailto:${contactEmail}`}>
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a href={socialLinks[0].url}>
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={socialLinks[1].url}>
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={socialLinks[2].url}>
            <FaCodepen />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Contact;