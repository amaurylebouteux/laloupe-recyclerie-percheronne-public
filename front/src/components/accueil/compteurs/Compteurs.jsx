import React from 'react';
import './Compteurs.css';

function Compteurs() {
    return (
        <div className="dsk-3 compteurs">
            <table className="mob-12 tab-11 tabx-11 dsk-10 table_count">
                <thead>
                    <tr>
                        <td colSpan="3" className="gras">Statistiques</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="counts">
                        <td className="counts"></td>
                        <td className="counts">Hebdomadaire</td>
                        <td className="counts">Totale</td>
                    </tr>
                    <tr className="counts">
                        <td className="counts">Récupération</td>
                        <td className="counts récupération">XXXX tonnes</td>
                        <td className="counts récupération">XXXX tonnes</td>
                    </tr>
                    <tr className="counts">
                        <td className="counts">Vente</td>
                        <td className="counts vente">XXXX tonnes</td>
                        <td className="counts vente">XXXX tonnes</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Compteurs;