import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => (
    <div className="barContainer">
        <div className="navBack">
            <nav className="navbar">
                <NavLink
                exact
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/"
                >
                Home
                </NavLink>
                <NavLink
                activeClassName="navbar__link--active"
                className="navbar__link"
                to="/about"
                >
                About
                </NavLink>
            
            </nav>
        </div>
    </div>
);

export default Navbar;