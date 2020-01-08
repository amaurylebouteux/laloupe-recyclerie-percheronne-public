import React from 'react';
import logo from './logo.png';
import DrawerToggleButton from '../drawer/DrawerToggleButton';
import './Navbar.css';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar__navigation">
            <div className="navbar__logo"><a href="/"><img src={logo} alt="logo" height="110px" /></a></div>
            <div className="spacer" />
            <div className="navbar__navigation-items">
                <ul>
                    <li><a href="/">Fonctionnement</a></li>
                    <li><a href="/">Événements</a></li>
                    <li><a href="/">Produits</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className="navbar__toggle-button">
                <DrawerToggleButton click={props.drawerToggleClickHandler} />
            </div>
        </nav>
    </header>
);

export default navbar;