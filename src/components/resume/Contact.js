import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import data from 'components/Data';
import styles from 'styles/Contact.module.css';
import withSpaceWrapper from 'components/wrappers/WithSpaceWrapper';

const { contactEmail, contactTo, social: socialLinks } = data;

const [linkedin, github, twitter] = socialLinks;

const Contact = () => (
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
          <a
            href={`mailto:${contactEmail}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </li>
        <li>
          <a 
            href={linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a 
            href={github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a 
            href={twitter.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default withSpaceWrapper(Contact);