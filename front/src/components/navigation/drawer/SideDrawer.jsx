import React from 'react';
import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = 'drawer';
    if (props.show) {
        drawerClasses = 'drawer open';
    }
    
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Fonctionnement</a></li>
                <li><a href="/">Évènements</a></li>
                <li><a href="/">Produits</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer;