import React from 'react';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.background} />
      <img
        src="./images/girl-and-pet.svg"
        alt="Girl and Pet"
        className={classes.img}
      />
    </div>
  );
};

export default Home;
