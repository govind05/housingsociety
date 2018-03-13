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
          <li><NavLink to='/home' activeStyle={{ background: "#81C784"}}>Home</NavLink></li>
          <li><NavLink to='/notice' activeStyle={{ background: "#81C784" }}>Notice Board</NavLink></li>
          <li><NavLink to='/event' activeStyle={{ background: "#81C784" }}>Events</NavLink></li>
          <li><NavLink to='/complaint' activeStyle={{ background: "#81C784" }}>Residents</NavLink></li>
          <li><NavLink to='/account' activeStyle={{ background: "#81C784" }}>Account</NavLink></li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default sideDrawer;
