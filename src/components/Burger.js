import React from 'react';

export const Burger = ({ open, setOpen }) => {
  return (
    <div
      className={`menu__wrapper ${open ? 'showBurger' : ''}`}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
