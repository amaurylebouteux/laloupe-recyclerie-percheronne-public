import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Accueil from './components/accueil/Accueil';
import Contact from './components/contact/Contact';
import Navigation from './components/navigation/Navigation';


import Carousel from './components/accueil/carousel/Carousel';
import Horaires from './components/accueil/horaires/Horaires';
import Compteurs from './components/accueil/compteurs/Compteurs';

import Explication from './components/fonctionnement/explication/Explication';
import Objets from './components/fonctionnement/objets/Objets';
import Plan from './components/fonctionnement/plan/Plan';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' exact component={Accueil} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
    
  )
} 


{/*         <Carousel />
        <Horaires />
        <Compteurs /> */}


{/*         <Explication />
        <Objets />
        <Plan /> */}

export default App;
