import React from 'react';
import cn from 'classnames';
import NavigateButton from '../NavigateButton';
import classes from './Header.module.scss';
import Logo from '../Logo/Logo';

const Header = () => {
  const {
    grid,
    grid__desktop: gridDesktop,
    grid__tablet: gridTablet,
    grid__mobile: gridMobile,
    grid__item: gridItem,
    grid__item__mobile_1_4: gridMobileFullSize,
    grid__item__tablet_1_12: gridTabletFullSize,
    grid__item__desktop_6_11: gridDesktopFirst,
    grid__item__desktop_12_17: gridDesktopSecond,
    grid__item__desktop_18_23: gridDesktopThird,
    grid__item__desktop_6_24: gridDesktopHalf,
  } = classes;

  return (
    <div>
      <div className={classes.container}>
        <div className={cn(grid, gridDesktop, gridTablet, gridMobile)}>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopFirst,
            )}
          >
            <Logo />
          </div>

          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopHalf,
            )}
          >
            <div className={classes.title}>
              <h1 className={classes.title__text}>Hi!👋</h1>
            </div>
          </div>

          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopHalf,
            )}
          >
            <div className={classes.subtitle}>
              <h2 className={classes.subtitle__text}>Welcome to Pet Badoo</h2>
            </div>
          </div>

          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopHalf,
            )}
          >
            <div className={classes.second__title}>
              <h2 className={classes.second__title_text}>Lets start using The Cat API</h2>
            </div>
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopFirst,
            )}
          >
            <NavigateButton
              url="/voting"
              title="Voting"
              img="./images/vote-table.svg"
              backgroundColor="#b4b7ff"
              borderColor="#e1e2ff"
            />
          </div>

          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopSecond,
            )}
          >
            <NavigateButton
              url="/breeds"
              title="Breeds"
              img="./images/pet-breeds.svg"
              backgroundColor="#97eab9"
              borderColor="#d5f7e3"
            />
          </div>

          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopThird,
            )}
          >
            <NavigateButton
              url="/gallery"
              title="Gallery"
              img="./images/images-search.svg"
              backgroundColor="#ffd280"
              borderColor="#ffedcc"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
