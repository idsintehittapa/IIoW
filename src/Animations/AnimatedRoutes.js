import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

import { LandingPage } from '../pages/LandingPage';
import { Encyclopedia } from '../pages/Encyclopedia';
import { Thinker } from '../pages/Thinker';
import { NoPage } from '../pages/NoPage';

import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    // defines which routes can be animated
    <AnimatePresence>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/encyclopedia" element={<Encyclopedia />} />
        <Route exact path="/encyclopedia/:id" element={<Thinker />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </AnimatePresence>
  );
};
