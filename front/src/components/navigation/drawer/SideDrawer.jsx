import React, { useEffect } from 'react';
import './SideDrawer.css'
import { Link } from "react-router-dom";


const sideDrawer = props => {
    let drawerClasses = 'drawer';
    if (props.show) {
        drawerClasses = 'drawer open';
    }
    
    return(
        <nav className={drawerClasses}>
            <ul>
                <Link to='/'><li><a href="/">Accueil</a></li></Link>
                <Link to='/fonctionnement'><li><a href="/">Fonctionnement</a></li></Link>
                <Link to='/evenements'><li><a href="/">Événements</a></li></Link>
                <Link to='/produits'><li><a href="/">Produits</a></li></Link>
                <Link to='/contact'><li><a href="/">Contact</a></li></Link>
            </ul>
        </nav>
    );
};

export default sideDrawer;