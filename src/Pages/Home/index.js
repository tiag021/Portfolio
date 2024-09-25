import NavBar from '../../Components/NavBar';

import indexImage from '../../Assets/index.jpg';

import style from './style.module.css';

import MyProjects from '../../Components/MyProjects';
import AboutMe from '../../Components/AboutMe';
import Contacts from '../../Components/Contacts';


const Home = () => {

  return (
    <>
      {/*Loading Bar*/}
      <div className="super_container">
        <NavBar scrolled={true} active={1}></NavBar>

        <div className={style.home}>
          <div
            className={style.background_image}
            style={{ backgroundImage: 'url(' + indexImage + ')' }}
          ></div>
          <div className={style.home_container}>
            <div className={style.home_title}>
              <h1>
                Welcome to my {' '}
                <span className={style.highlight_word}>Portfolio</span>
              </h1>
            </div>
          </div>
        </div>
        <MyProjects />
        <AboutMe />
        <Contacts />
      </div>
    </>
  );
};

export default Home;
