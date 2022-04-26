import React, { useState } from 'react';
import { Burger } from './Burger';
import { Menu } from './Menu';

import './menu.css';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </nav>
  );
};
