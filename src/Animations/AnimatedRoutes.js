import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';
import { Encyclopedia } from '../pages/Encyclopedia';

import { AnimatePresence } from 'framer-motion';

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    // defines which routes can be animated
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/encyclopedia" element={<Encyclopedia />} />
      </Routes>
    </AnimatePresence>
  );
};
