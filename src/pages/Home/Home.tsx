import React from 'react';
import classes from './Home.module.scss';
import img from '../../images/girl-and-pet.svg';
// import MainIMG from '../../components/MainIMG/MainIMG';

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.background} />
      <img
        src={img}
        alt="Girl and Pet"
        className={classes.img}
      />
    </div>
  );
};

export default Home;
