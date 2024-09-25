import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import style from './style.module.css'; // Create a CSS module for styling

const Contacts = () => {
  return (
    <div id="contacts" className={style.contacts}>
      <h1>Contact Me</h1>
      <ul>
        <li>almeidatiago81@gmail.com</li>
        <li>
          <a href="https://linkedin.com/in/tiagofernandes021" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/tiag021" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
