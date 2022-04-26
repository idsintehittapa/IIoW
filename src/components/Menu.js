import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = ({ open }) => {
  return (
    <div className={`menu__overlay ${open ? ' showMenu' : ''}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/encyclopedia">Encyclopedia</Link>
        </li>
        <li>
          <Link to="#">Prologue</Link>
        </li>
        <li>
          <Link to="#">Journal</Link>
        </li>
      </ul>
    </div>
  );
};
