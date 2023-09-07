import React from 'react';
import Search from '../../components/Search/Search';
import LikeButton from '../../components/Buttons/LikeButton/LikeButton';
import DislikeButton from '../../components/Buttons/DislikeButton/DislikeButton';
import HeartButton from '../../components/Buttons/HeartButton/HeartButton';
import classes from './Gallery.module.scss';

const Gallery = () => {
  return (
    <div>
      <div className={classes.header_container}>
        <Search />
        <LikeButton />
        <HeartButton />
        <DislikeButton />
      </div>
    </div>
  );
};

export default Gallery;
