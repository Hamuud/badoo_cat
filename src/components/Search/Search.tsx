import React from 'react';
import classes from './Search.module.scss';
import img from '../../images/search-20.svg';

const Search = () => {
  return (
    <div className={classes.container}>
      <input
        placeholder="Search for breeds by name"
        className={classes.input}
      />
      <button
        type="submit"
        className={classes.search_button}
      >
        <img
          src={img}
          alt="search button"
        />
      </button>
    </div>
  );
};

export default Search;
