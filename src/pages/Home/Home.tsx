import React from 'react';
import cn from 'classnames';
import NavigateButton from '../../components/NavigateButton/NavigateButton';
import classes from './Home.module.scss';
import votingImg from '../../images/vote-table.svg';
import breedsImg from '../../images/pet-breeds.svg';
import galleryImg from '../../images/images-search.svg';

const Home = () => {
  const {
    grid,
    grid__desktop: gridDesktop,
    grid__tablet: gridTablet,
    grid__mobile: gridMobile,
    grid__item: gridItem,
    grid__item__mobile_1_4: gridMobileFullSize,
    grid__item__tablet_1_12: gridTabletFullSize,
    grid__item__desktop_1_3: gridDesktopFirst,
    grid__item__desktop_4_6: gridDesktopSecond,
    grid__item__desktop_7_9: gridDesktopThird,
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
            <NavigateButton
              url="/voting"
              title="Voting"
              img={votingImg}
              backgroundColor="#b4b7ff"
              count="first"
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
              img={breedsImg}
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
              img={galleryImg}
              backgroundColor="#ffd280"
              borderColor="#ffedcc"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
