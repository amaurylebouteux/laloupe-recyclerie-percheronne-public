import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTopRoute from './components/ScrollToTopRoute';
import Accueil from './components/accueil/Accueil';
import Fonctionnement from './components/fonctionnement/Fonctionnement';
import Contact from './components/contact/Contact';
import Mentions from './components/mentions/Mentions';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' exact component={Accueil} />
          <ScrollToTopRoute path='/fonctionnement' component={Fonctionnement} />
          <ScrollToTopRoute path='/contact' component={Contact} />
          <ScrollToTopRoute path='/mentions' component={Mentions} />
        </Switch>
      </Router>
    </div>
    
  )
} 

export default App;