import React, { Component } from 'react';

import './Layout.css';
import SideDrawer from '../../components/NavBar/SideDrawer/SideDrawer';
import Toolbar from '../../components/NavBar/Toolbar/Toolbar';
class Layout extends Component {

  state = {
    sideDrawerOpen: false
  }
  // Handling sideDrawer's Opening and Closing.
  sidedrawerClosedHandler = () => (
    this.setState({ sideDrawerOpen: false })
  )
  sidedrawerToggleHandler = () => (
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    })
  )

  render() {
    return (
      // Common Layout for all the pages.
      <div>
        <Toolbar
          sideDrawerClick={this.sidedrawerToggleHandler}
        />
        <SideDrawer 
          open={this.state.sideDrawerOpen}
          clicked={this.sidedrawerClosedHandler}
        />
        <main className='Content'>
          {this.props.children}
        </main>
      </div>
    )
  }
}


export default Layout;