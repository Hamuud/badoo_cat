import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>
    </div>
  );
};
