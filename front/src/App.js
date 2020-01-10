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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTopRoute from './components/ScrollToTopRoute';
import Accueil from './components/accueil/Accueil';
import Fonctionnement from './components/fonctionnement/Fonctionnement';
import Contact from './components/contact/Contact';
import Mentions from './components/mentions/Mentions';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route exact path='/' exact component={Accueil} />
          <Route exact path= '/adminlogin' component ={() => <AdminLogin updateFunction={this.updateLogin} />} />
          {isLogged ? <Route exact path = '/administration' component = {() => <Administration logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}
          {isLogged ? <Route exact path = '/adminaccueil' component = {() => <AdminAccueil logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}
          {isLogged ? <Route exact path = '/adminfonctionnement' component = {() => <AdminFonctionnement logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}
          {isLogged ? <Route exact path = '/adminevenements' component = {() => <AdminEvenements logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}
          {isLogged ? <Route exact path = '/adminproduits' component = {() => <AdminProduits logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}
          {isLogged ? <Route exact path = '/admincontact' component = {() => <AdminContact logOut = {this.logOut}/>}/> : <Redirect to="/adminlogin" />}
          <ScrollToTopRoute path='/fonctionnement' component={Fonctionnement} />
          <ScrollToTopRoute path='/contact' component={Contact} />
          <ScrollToTopRoute path='/mentions' component={Mentions} />
        </Switch>
    </div>
  );}

}




export default App;