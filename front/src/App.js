
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
          <Route path='/fonctionnement' component={Fonctionnement} />
          <Route path='/contact' component={Contact} />
          <Route path='/mentions' component={Mentions} />
        </Switch>
      </Router>
    </div>
    
  )
} 

export default App;