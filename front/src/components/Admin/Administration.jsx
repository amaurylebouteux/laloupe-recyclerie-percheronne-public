import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Administration.css';

class Administration extends Component {
   

    render() {
    return(
        <div>
            <div className="adminheader mob-12 tab-12 tabx-12">
                <img id="logoAdmin" src ="./img/logo.png" alt="logo" />
           
                 <h1 className="adminTitle">Administration Recyclerie Percheronne</h1>
            </div>
            <div className="adminNav mob-12 tab-12 tabx-12">
                <h2 className="adminWelcome mob-12 tab-10">Bienvenue dans l'administration du site Recyclerie Percheronne !</h2>
                <h2 className="adminHomeChoice tab-12">Choisissez la page que vous souhaitez modifier :</h2>
                <div className="adminHomeButtonContainer mob-6 tabx-12 tab-12">
                    <button className="adminHomeNavButton tab-4 tabx-4"><NavLink to="/AdminAccueil" className="inactive" activeClassName="active">Accueil</NavLink></button>
                    <button className="adminHomeNavButton tab-4 tabx-4"><NavLink to="/AdminFonctionnement" className="inactive" activeClassName="active">Fonctionnement</NavLink></button>
                    <button className="adminHomeNavButton tab-4 tabx-4"><NavLink to="/AdminEvenements" className="inactive" activeClassName="active">Evénements</NavLink></button>
                    <button className="adminHomeNavButton tab-4 tabx-4"><NavLink to="/AdminProduits" className="inactive" activeClassName="active">Produits</NavLink></button>
                    <button className="adminHomeNavButton tab-4 tabx-4"><NavLink to="/AdminContact" className="inactive" activeClassName="active">Contact</NavLink></button>
                    <button className="adminHomeNavButton disconnect tab-4 tabx-4" onClick={this.props.logOut}>Déconnexion</button>
            </div>
            </div>
        </div>
    )}
}





export default Administration;