import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <img
        src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"
        alt="Logo"
      />
      <Link to={`/login`} className="profileButton">
        Authorization
      </Link>
    </header>
  );
};

export default Header;