import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={s.nav}>
      {['Profile', 'Dialogs', 'News', 'Music', 'Settings'].map((text, index) => (
        <div key={index} className={s.item}>
          <NavLink
            to={`/${text.toLowerCase()}`}
            className={activeLink === text ? s.activeLink : ''}
            onClick={() => handleLinkClick(text)}
          >
            {text}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
