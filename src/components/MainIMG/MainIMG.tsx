import React from 'react';
import img from '../../images/girl-and-pet.svg';
import classes from './MainIMG.module.scss';

const MainIMG = () => {
  return (
    <div className={classes.img}>
      <img
        src={img}
        alt="girl and pet"
      />
    </div>
  );
};

export default MainIMG;
