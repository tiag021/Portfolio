// AboutMe.js
import React from 'react';
import style from './style.module.css'; // Create a CSS module for styling

const AboutMe = () => {
  return (
    <div id="about-me" className={style.aboutMe}>
      <h1>About Me</h1>
      <p>
        <ul>
          <li>
            Game creator with experience in Unity, highly motivated and passionate about creating immersive and engaging experiences for players, with a focus on gameplay and narrative.
          </li>
          <li>
            Web developer with solid knowledge in React, PostgreSQL, MongoDB, and MailCatcher.
          </li>
        </ul>
      </p>
      {/* Add more details about yourself */}
    </div>
  );
};

export default AboutMe;
