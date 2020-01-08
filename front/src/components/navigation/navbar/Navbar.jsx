import React from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";
import DrawerToggleButton from '../drawer/DrawerToggleButton';
import './Navbar.css';

const navbar = props => (
    <header className="navbar">
        <nav className="navbar__navigation">
            <div className="navbar__logo"><Link to='/'><img src={logo} alt="logo" height="110px" /></Link></div>
            <div className="spacer" />
            <div className="navbar__navigation-items">
                <ul>
                    <Link to='/fonctionnement'><li><a href="/">Fonctionnement</a></li></Link>
                    <Link to='/evenements'><li><a href="/">Événements</a></li></Link>
                    <Link to='/produits'><li><a href="/">Produits</a></li></Link>
                    <Link to='/contact'><li><a href="/">Contact</a></li></Link>
                </ul>
            </div>
            <div className="navbar__toggle-button">
                <DrawerToggleButton click={props.drawerToggleClickHandler} />
            </div>
        </nav>
    </header>
);

export default navbar;