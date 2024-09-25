// MyProjects.js
import React from 'react';
import style from './style.module.css'; // Create a CSS module for styling

const MyProjects = () => {
  return (
    <div id="my-projects" className={style.myProjects}>
      <h1>My Projects</h1>
      <p>Here are some of my recent projects:</p>
      {/* Add content about your projects */}
      <ul>
        <li>Jumping Zac - EPVL ...</li>
        <li>Evoting - IPT ...</li>
        <li>MERmaid - IPT ...</li>
      </ul>
    </div>
  );
};

export default MyProjects;
