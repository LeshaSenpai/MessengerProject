import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://www.freelogodesign.org/Content/img/logo-ex-7.png"
                alt="Logo"
            />
            <Link to={`/Authorization`} className={s.profileButton}>
                Authorization
              </Link>
        </header>
    );
};

export default Header;
