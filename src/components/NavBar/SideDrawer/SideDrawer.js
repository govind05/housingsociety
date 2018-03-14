import React from 'react';
import { NavLink } from 'react-router-dom';

import Backdrop from '../Backdrop/Backdrop';
import './SideDrawer.css';

const sideDrawer = (props) => {
  let classes = ['SideBar', 'Close'];
  if (props.open) {
    classes = ['SideBar', 'Open'];
  }
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.clicked} />
      <nav className={classes.join(' ')} onClick={props.clicked}>
        <ul>
          <li><NavLink to='/home' activeStyle={{ background: "#81C784", color: 'white' }}> Home </NavLink></li>
          <li><NavLink to='/notice' activeStyle={{ background: "#81C784", color: 'white' }}>Notice Board</NavLink></li>
          <li><NavLink to='/residents' activeStyle={{ background: "#81C784", color: 'white' }}>Residents</NavLink></li>
          <li><NavLink to='/account' activeStyle={{ background: "#81C784", color: 'white' }}>Account</NavLink></li>
          <li><a href="">Logout</a> </li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default sideDrawer;
