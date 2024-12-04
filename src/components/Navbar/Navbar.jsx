import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        { path: "/profile", label: "Profile" },
        { path: "/dialogs", label: "Messages" },
        { path: "/news", label: "News" },
        { path: "/music", label: "Music" },
        { path: "/settings", label: "Settings" }
    ];

    return (
        <nav className={s.nav}>
            {navItems.map((item, index) => (
                <div key={index} className={s.item}>
                    <NavLink to={item.path} activeClassName={s.activeLink}>
                        {item.label}
                    </NavLink>
                </div>
            ))}
        </nav>
    );
};

export default Navbar;
