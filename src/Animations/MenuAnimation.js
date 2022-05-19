import React from 'react';
import './menuAnimation.css';
import { Comic1 } from './Comic1';
import { Comic2 } from './Comic2';
import { Comic3 } from './Comic3';

export const MenuAnimation = () => {
  return (
    <div class="comic__container">
      <Comic1 />
      <Comic2 />
      <Comic3 />
    </div>
  );
};
