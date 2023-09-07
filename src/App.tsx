import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import cn from 'classnames';
import classes from './App.module.scss';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import Voting from './pages/Voting/Voting';
import Breeds from './pages/Breeds/Breeds';
import Gallery from './pages/Gallery/Gallery';

export const App: React.FC = () => {
  const {
    grid,
    grid__desktop: gridDesktop,
    grid__tablet: gridTablet,
    grid__mobile: gridMobile,
    grid__item: gridItem,
    grid__item__mobile_1_4: gridMobileFullSize,
    grid__item__tablet_1_12: gridTabletFullSize,
    grid__item__desktop_1_10: gridDesktopFirstHalf,
    grid__item__desktop_12_24: gridDesktopSecondHalf,
  } = classes;

  return (
    <div className={classes.starter}>
      <div className={cn(grid, gridDesktop, gridTablet, gridMobile)}>
        <div
          className={cn(
            gridItem,
            gridMobileFullSize,
            gridTabletFullSize,
            gridDesktopFirstHalf,
          )}
        >
          <Header />
        </div>

        <div
          className={cn(
            gridItem,
            gridMobileFullSize,
            gridTabletFullSize,
            gridDesktopSecondHalf,
          )}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/gallery" element={<Gallery />} />

            <Route path="*" element={<PageNotFound />} />

          </Routes>
        </div>
      </div>
    </div>
  );
};
