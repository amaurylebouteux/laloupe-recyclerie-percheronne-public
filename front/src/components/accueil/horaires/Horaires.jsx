import React from 'react';
import './Horaires.css';

function Horaires() {
    return (
        <div className="dsk-3 horaires">
            <table className="mob-12 tab-11 tabx-11dsk-10 table_horaires">
                <thead>
                    <tr>
                        <td colSpan="6" className="gras">Horaires</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2">Jour</td>
                        <td colSpan="2">Matin</td>
                        <td colSpan="2">Après-midi</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Lundi</td>
                        <td colSpan="2" className="récupération"> 9h-12h</td>
                        <td colSpan="2" className="vente">14h-18h</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Mardi</td>
                        <td colSpan="2" className="récupération"> 9h-12h</td>
                        <td colSpan="2" className="vente">14h-18h</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Mercredi</td>
                        <td colSpan="2" className="double"> 9h-12h</td>
                        <td colSpan="2" className="vente">14h-18h</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Jeudi</td>
                        <td colSpan="2" className="récupération"> 9h-12h</td>
                        <td colSpan="2" className="vente">14h-18h</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Vendredi</td>
                        <td colSpan="2" className="récupération"> 9h-12h</td>
                        <td colSpan="2" className="vente">14h-18h</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Samedi</td>
                        <td colSpan="2" className="double"> 9h-12h</td>
                        <td colSpan="2">Fermé</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Dimanche</td>
                        <td colSpan="2">Fermé</td>
                        <td colSpan="2">Fermé</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="récupération">Récupération</td>
                        <td colSpan="3" className="vente">Vente</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Horaires;