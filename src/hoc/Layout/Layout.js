import React, { Component } from 'react';

import './Layout.css';
import SideDrawer from '../../components/NavBar/SideDrawer/SideDrawer';
import Toolbar from '../../components/NavBar/Toolbar/Toolbar';
class Layout extends Component {

  state = {
    sideDrawerOpen: false
  }

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
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}


export default Layout;