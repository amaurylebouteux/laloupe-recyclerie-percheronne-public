import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import SideDrawer from './components/drawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';
import Horaires from './components/horaires/Horaires';
import Compteurs from './components/compteurs/Compteurs';
import Footer from './components/footer/Footer';
import Carousel from './components/carousel/Carousel';

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
        <Footer />
      </div>
    );
  }
}

export default App;
