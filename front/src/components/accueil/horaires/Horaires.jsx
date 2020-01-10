import React from 'react';
import './Horaires.css';

function Horaires() {
    return (
        <div className="dsk-3 horaires">
            <table className="mob-12 tab-11 tabx-11 dsk-10 table_horaires">
                <thead>
                    <tr>
                        <td colSpan="6" className="gras">Horaires</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan="2" className="case gras">Jour</td>
                        <td colSpan="2" className="case gras">Matin</td>
                        <td colSpan="2" className="case gras">Après-midi</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="case">Lundi</td>
                        <td colSpan="2" className="récupération case"> 9h-12h</td>
                        <td colSpan="2" className="vente case">14h-18h</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="case">Mardi</td>
                        <td colSpan="2" className="récupération case"> 9h-12h</td>
                        <td colSpan="2" className="vente case">14h-18h</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="case">Mercredi</td>
                        <td colSpan="2" className="double case"> 9h-12h</td>
                        <td colSpan="2" className="vente case">14h-18h</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="case">Jeudi</td>
                        <td colSpan="2" className="récupération case"> 9h-12h</td>
                        <td colSpan="2" className="vente case">14h-18h</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="case">Vendredi</td>
                        <td colSpan="2" className="récupération case"> 9h-12h</td>
                        <td colSpan="2" className="vente case">14h-18h</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="case">Samedi</td>
                        <td colSpan="2" className="double case"> 9h-12h</td>
                        <td colSpan="2" className="case">Fermé</td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="case">Dimanche</td>
                        <td colSpan="2" className="case">Fermé</td>
                        <td colSpan="2" className="case">Fermé</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3" className="récupération case">Récupération</td>
                        <td colSpan="3" className="vente case">Vente</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Horaires;