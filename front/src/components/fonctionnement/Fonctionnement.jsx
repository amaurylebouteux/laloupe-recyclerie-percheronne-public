import React from 'react';
import Explication from './explication/Explication';
import Objets from './objets/Objets';
import Plan from './plan/Plan';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

function Fonctionnement() {
    return (
        <div className='Fonctionnement'>
            <Navigation />
            <Explication />
            <Objets />
            <Plan />
            <Footer />
        </div>
    )
}

export default Fonctionnement;