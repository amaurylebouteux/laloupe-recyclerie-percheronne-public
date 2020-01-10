import React from 'react';
import './Mentions.css';
import Navigation from '../navigation/Navigation';
import Footer from '../footer/Footer';

function Mentions() {
    return (
        <div>
            <Navigation />
            <div className="mob-12 tab-10 tabx-10 dsk-6 cad">
                <div className="mob-12 tab-12 tabx-12 dsk-6 centre">
                    <p className="mob-12 tab-12 tabx-12 dsk-12 nom">
                        Mentions légales
                    </p>
                    <p>
                        Editeur du site
                    </p>
                    <p>
                        La Recyclerie Percheronne
                    </p>
                    <p>
                        6 route de Senonches - 28240 MANOU
                    </p>
                    <p>
                        Tél. +33 (0)6 26 39 25 39
                    </p>
                    <p>
                        SIRET : 000 000 000 00000
                    </p>
                    <p>
                        Directeur de la publication : Florian GOURRIER
                    </p>
                    <p>
                        Conception web
                    </p>
                    <p>
                        Création du site Internet : Wild Code school, La Loupe
                    </p>
                    <p>
                        Hébergement web
                    </p>
                    <p>
                        OVH, SAS au capital de 10 059 500 €
                    </p>
                    <p>
                        2 rue Kellermann – 59100 Roubaix – France
                    </p>
                </div>
            </div>
            <Footer />
        </div>
            );
        }
        
export default Mentions;