import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Administration.css';

class Administration extends Component {
   

    render() {
    return(
        <div>
            <div className="adminheader mob-12">
                <img id="logoAdmin" src ="./img/logo.png" alt="logo" />
           
                 <h1 className="adminTitle">Administration Recyclerie Percheronne</h1>
            </div>
            <div className="adminNav">
                <h2 className="adminWelcome tab-10">Bienvenue dans l'administration du site Recyclerie Percheronne!</h2>
                <h2 className="adminChoice">Choisissez la page que vous souhaitez modifier:</h2>
                <div className="adminButtonContainer mob-6">
                    <button className="adminNavButton"><NavLink to="/AdminAccueil" className="inactive" activeClassName="active">Accueil</NavLink></button>
                    <button className="adminNavButton"><NavLink to="/AdminFonctionnement" className="inactive" activeClassName="active">Fonctionnement</NavLink></button>
                    <button className="adminNavButton"><NavLink to="/AdminEvenements" className="inactive" activeClassName="active">Evénements</NavLink></button>
                    <button className="adminNavButton"><NavLink to="/AdminProduits" className="inactive" activeClassName="active">Produits</NavLink></button>
                    <button className="adminNavButton"><NavLink to="/AdminContact" className="inactive" activeClassName="active">Contact</NavLink></button>
                    <button className="adminNavButton" onClick={this.props.logOut}>Déconnexion</button>
            </div>
            </div>
        </div>
    )}
}





export default Administration;