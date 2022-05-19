import React from 'react';
import { Link } from 'react-router-dom';
import { MenuAnimation } from '../Animations/MenuAnimation';

export const Menu = ({ open, setOpen }) => {
  return (
    <div className={`menu__overlay ${open ? ' showMenu' : ''}`}>
      <ul>
        <li>
          <Link to="/" onClick={() => setOpen(!open)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/encyclopedia" onClick={() => setOpen(!open)}>
            Encyclopedia
          </Link>
        </li>
        <li>
          <Link to="#" onClick={() => setOpen(!open)}>
            Prologue
          </Link>
        </li>
        <li>
          <Link to="/" onClick={() => setOpen(!open)}>
            Journal
          </Link>
        </li>
      </ul>
      <div className="menu__animation-wrapper">
        <MenuAnimation />
      </div>
    </div>
  );
};
