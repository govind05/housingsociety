import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const navBar = (props) => {
  return (
    <React.Fragment>
      <ul className='NavBar'>
        <li><NavLink to='/home' activeStyle={{color:'white'}}>Home</NavLink></li>
        <li><NavLink to='/notice' activeStyle={{ color: 'white' }}>Notice Board</NavLink></li>
        <li><NavLink to='/event' activeStyle={{ color: 'white' }}>Events</NavLink></li>
        <li><NavLink to='/residents' activeStyle={{ color: 'white' }}>Residents</NavLink></li>
        <li><NavLink to='/account' activeStyle={{ color: 'white' }}>Account</NavLink></li>
      </ul>
    </React.Fragment>
  )
}

export default navBar;