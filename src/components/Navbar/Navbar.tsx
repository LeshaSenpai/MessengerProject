import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className="nav">
      {["Profile", "Dialogs", "News", "Music", "Users", "Settings"].map((text, index) => (
        <div key={index} className="item">
          <NavLink
            to={`/${text.toLowerCase()}`}
            className={activeLink === text ? "activeLink" : ""}
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