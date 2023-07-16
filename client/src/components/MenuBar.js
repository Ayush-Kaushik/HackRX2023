import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;