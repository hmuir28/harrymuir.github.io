import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

import styles from '../styles/Contact.module.css';

const Contact = ({ contactEmail, contactTo, socialLinks }) => (
  <div className={styles.contactContainer}>
    <h1>Get in touch.</h1>
    <p>{contactTo}</p>
    <br></br>
    <a className={styles.emailLink} href={`mailto:${contactEmail}`}>
      {contactEmail}
    </a>
    <div>
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