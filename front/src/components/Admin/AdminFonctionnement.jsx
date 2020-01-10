import React, {Component} from 'react';
import './AdminFonctionnement.css';
import {NavLink} from 'react-router-dom';

class AdminFonctionnement extends Component {
   

    render() {
    return(
        <div>
            <div className="adminheader mob-12">
                <img id="logoAdmin" src ="./img/logo.png" alt="logo" />
           
                 <h1 className="adminTitle">Administration Recyclerie Percheronne</h1>
            </div>
            <div className="adminNav mob-12">
                
                <h2 className="adminChoice">Choisissez la page que vous souhaitez modifier:</h2>
                <div className="adminButtonContainer mob-12 tab-12 tabx-12">
                    <button className="adminNavButton"><NavLink to="/AdminAccueil" className="inactive" activeClassName="active">Accueil</NavLink></button>

                    <button className="adminNavButton mob-4 tab-3 tabx-3"><NavLink to="/AdminFonctionnement" className="inactive" activeClassName="active">Fonctionnement</NavLink></button>
                    <button className="adminNavButton mob-4 tab-3 tabx-3"><NavLink to="/AdminEvenements" className="inactive" activeClassName="active">Evénements</NavLink></button>
                    <button className="adminNavButton mob-4 tab-3 tabx-3"><NavLink to="/AdminProduits" className="inactive" activeClassName="active">Produits</NavLink></button>
                    <button className="adminNavButton mob-4 tab-3 tabx-3"><NavLink to="/AdminContact" className="inactive" activeClassName="active">Contact</NavLink></button>
                    <button className="adminNavButton mob-4 tab-3 tabx-3" onClick={this.props.logOut}>Déconnexion</button>
            </div>
            </div>
        </div>
    )}
}





export default AdminFonctionnement;