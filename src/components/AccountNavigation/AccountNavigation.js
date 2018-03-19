import React from 'react';
import { NavLink } from 'react-router-dom';

import './AccountNavigation.css';

// Navigation Sidebar for the Account page.
export default () => {
  return (
    <div className='AccountNavigation'>
      <NavLink
        to='/account/user-info'
        activeStyle={{
          background: '#4CAF50',
          color: 'white',
          boxShadow: 'inset 0 0 10px #33691E'
        }} >
        User Details
      </NavLink>
      <NavLink
        to='/account/complaint'
        activeStyle={{
          background: '#4CAF50',
          color: 'white',
          boxShadow: 'inset 0 0 10px #33691E'
        }} >
        Register Complaint
      </NavLink>
    </div>
  )
}
