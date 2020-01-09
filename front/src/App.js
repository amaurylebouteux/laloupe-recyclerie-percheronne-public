<<<<<<< HEAD
import React ,{Component} from 'react';
import './App.css';
import AdminLogin from './components/Admin/AdminLogin';
import Administration from './components/Admin/Administration';
import {Switch, Route, Redirect} from "react-router-dom";
import AdminAccueil from './components/Admin/AdminAccueil';
import AdminFonctionnement from './components/Admin/AdminFonctionnement';
import AdminEvenements from './components/Admin/AdminEvenements';
import AdminProduits from './components/Admin/AdminProduits';
import AdminContact from './components/Admin/AdminContact';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogged: false,
			redirectToAdminPage: false,
		};
	}
	
	// fonction pour mettre à jour isLogged et redirectToAdminPage dans le state de App.js,
	// cette fonction est passée en props au composant LoginPage pour que ce même composant puisse déclencher cette fonction
	updateLogin = () => {
		this.setState({
			isLogged: true,
			redirectToAdminPage: true
			});

  };
  
  logOut = () => {
    localStorage.setItem('token', '');
    this.setState({
      isLogged: false,
      redirectToAdminPage: false
    });
  }

	render() {
		const { isLogged, redirectToAdminPage } = this.state;
  return (
    <div className="App">

      
      {redirectToAdminPage && <Redirect to="/administration" />}
        <Switch>
          <Route exact path= '/adminlogin' component ={() => <AdminLogin updateFunction={this.updateLogin} />} />
          {isLogged ? <Route exact path = '/administration' component = {() => <Administration logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}
          {isLogged ? <Route exact path = '/adminAccueil' component = {() => <AdminAccueil logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}
          {isLogged ? <Route exact path = '/adminFonctionnement' component = {() => <AdminFonctionnement logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}
          {isLogged ? <Route exact path = '/adminEvenements' component = {() => <AdminEvenements logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}
          {isLogged ? <Route exact path = '/adminProduits' component = {() => <AdminProduits logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}
          {isLogged ? <Route exact path = '/adminContact' component = {() => <AdminContact logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}

        </Switch>   
      
    </div>
  );}

}
=======

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
>>>>>>> 950e794bb224c3439faca6ee0d35c1435a2effe6

export default App;