import React from 'react';
import Carousel from './carousel/Carousel';
import Compteurs from './compteurs/Compteurs';
import Horaires from './horaires/Horaires';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

function Accueil() {
    return (
        <div className='Accueil'>
            <Navigation />
            <Carousel />
            <Horaires />
            <Compteurs />
            <Footer />
        </div>
    )
}

export default Accueil;