/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import classnames from 'classnames';

const NavBar = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0); // Set scrolled to true if window is scrolled
    };

    if (props.scrolled) {
      setScrolled(true); // Turn black initially if prop is passed
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [props.scrolled]); // Only trigger on prop change

  return (
    <>
      <div className="top-loading-bar" id="loading-bar"></div>
      <header className={classnames(style.header, 'trans_400', { [style.scrolled]: scrolled })}>
        <div className={style.header_content}>
          <div className={style.logo}>
            <a href="/">Tiago Fernandes</a>
          </div>
          <div className={style.main_nav}>
            <ul>
              <li>
                <a href="#my-projects" className={props.active === 2 ? style.active : ''}>
                  My Projects
                </a>
              </li>
              <li>
                <a href="#about-me" className={props.active === 3 ? style.active : ''}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#contacts" className={props.active === 4 ? style.active : ''}>
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
