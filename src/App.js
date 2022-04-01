import React from 'react';
import { LandingPage } from './pages/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Encyclopedia } from './pages/Encyclopedia';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/encyclopedia" element={<Encyclopedia />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
