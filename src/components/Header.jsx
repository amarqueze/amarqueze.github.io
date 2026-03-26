import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../assets/avatar.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="avatar-container">
          <img src={avatar} alt="Avatar" className="avatar" />
        </NavLink>
        <nav className="nav">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' active' : '')
            }
          >
            About
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' active' : '')
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' active' : '')
            }
          >
            Blog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;