import React from 'react';
import {NavLink} from 'react-router-dom';

import './AccountNavigation.css';

export default () => {
  return (
    <div className='AccountNavigation'>
      <NavLink to='/account/user-info' activeStyle={{background:'#2E7D32', color: 'white'}} >User Details</NavLink>
      <NavLink to='/account/complaint' activeStyle={{background:'#2E7D32', color: 'white'}} >Register Complaint</NavLink>
    </div>
  )
}
