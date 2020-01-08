import React from 'react';
import Backdrop from './backdrop/Backdrop';
import DrawerToggleButton from './drawer/DrawerToggleButton';
import SideDrawer from './drawer/SideDrawer';
import Navbar from './navbar/Navbar';

class Navigation extends React.Component {
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
        </div>
    );
  }
}

export default Navigation;