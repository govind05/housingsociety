import React from 'react';
import SideDrawerToggler from '../SideDrawer/SideDrawerToggler/SideDrawerToggler';
import NavBar from '../NavBar';
import './Toolbar.css';

const toolbar = (props) => (
  <header className='Toolbar'>
    <SideDrawerToggler click={props.sideDrawerClick}/>
    <div className='DesktopOnly'>
      <NavBar/>
    </div>
  </header>
)

export default toolbar;