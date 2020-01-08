import React from 'react';
import './Objets.css';

function Objets() {
    return (
        <div className="mob-10 tab-11 tabx-11 dsk-8 encart">
            <p className="mob-12 tab-12 tabx-12 dsk-12 texte_gras">Nous récupérons :</p>
            <div className="mob-12 tab-5 tabx-5 dsk-6 liste">
                <li>Meubles</li>
                <li>Vêtements/linge de maison</li>
                <li>Chaussures</li>
                <li>Maroquinerie</li>
                <li>Livres</li>
                <li>Equipements Puéricultures</li>
                <li>Jouets</li>
                <li>CD-DVD</li>
            </div>
            <div className="mob-12 tab-5 tabx-5 dsk-5 liste">
                <li>Décorations</li>
                <li>Vaisselle</li>
                <li>Outillage /jardinage</li>
                <li>Vélos et équipement sportifs</li>
                <li>Bois</li>
                <li>Ferrailles</li>
                <li>Bijoux</li>
            </div>
        </div>
    );
}

export default Objets;