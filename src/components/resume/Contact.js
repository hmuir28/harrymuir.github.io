import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import data from '../Data';
import styles from '../../styles/Contact.module.css';
import withSpaceWrapper from '../wrappers/WithSpaceWrapper';

const { contactEmail, contactTo, social: socialLinks } = data;

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
            <FaTwitter />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default withSpaceWrapper(Contact);