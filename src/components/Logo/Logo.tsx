import React from 'react';
import { Link } from 'react-router-dom';
import img_logo from '../../images/logo.svg';
import classes from './Logo.module.scss';

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={img_logo}
        alt="Logo"
        className={classes.logo}
      />
    </Link>
  );
};

export default Logo;
