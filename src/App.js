import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedRoutes } from './Animations/AnimatedRoutes';

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
