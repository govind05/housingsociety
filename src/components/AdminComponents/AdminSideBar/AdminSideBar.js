import React from 'react';
import {NavLink} from 'react-router-dom';
import { MdEventAvailable, MdHome, MdComment } from 'react-icons/lib/md';
import { FaUserPlus } from 'react-icons/lib/fa';

import './AdminSideBar.css';

export default () => {
  return (
    <div className='AdminSideBar'>
      <NavLink to='/admin/notice' activeStyle={{color: 'white', backgroundColor: '#1B5E20'}} >
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <MdEventAvailable size={24} /> 
      <span style={{marginLeft: '5px'}}>
      Add Notice
      </span>
      </div>
      </NavLink>
      <NavLink to='/admin/resident' activeStyle={{color: 'white', backgroundColor: '#1B5E20'}}  >
       <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <MdHome size={24} /> 
      <span style={{marginLeft: '5px'}}>
      Add Resident
      </span>
      </div>
      </NavLink>
      <NavLink to='/admin/user' activeStyle={{color: 'white', backgroundColor: '#1B5E20'}}  >
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <FaUserPlus size={24} /> 
      <span style={{marginLeft: '5px'}}>
      Add User
      </span>
      </div>
      </NavLink>
      <NavLink to='/admin/complaints' activeStyle={{color: 'white', backgroundColor: '#1B5E20'}}  >
       <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <MdComment size={24} /> 
      <span style={{marginLeft: '5px'}}>
      View Complaints
      </span>
      </div>
      </NavLink>
    </div>
  )
}
