import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/drawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';

import Carousel from './components/accueil/carousel/Carousel';
import Horaires from './components/accueil/horaires/Horaires';
import Compteurs from './components/accueil/compteurs/Compteurs';

import Explication from './components/fonctionnement/explication/Explication';
import Objets from './components/fonctionnement/objets/Objets';
import Plan from './components/fonctionnement/plan/Plan';

import Contact from './components/contact/contact/Contact';

import Footer from './components/footer/Footer';

class App extends React.Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };
  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App">
        <div style={{ height: '100%' }}>
          <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>

      
        <Carousel />
        <Horaires />
        <Compteurs />


{/*         <Explication />
        <Objets />
        <Plan /> */}

{/*         <Contact />
 */}
        <Footer />
      </div>
    );
  }
}

export default App;
