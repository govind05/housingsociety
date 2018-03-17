import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { authLogout } from '../../store/actions/users';
import {logoutHandler} from '../../shared/utility';

import './NavBar.css';

const navBar = (props) => {
  return (
    <React.Fragment>
      <ul className='NavBar'>
        <li><NavLink to='/home' activeStyle={{ color: 'white' }}>Home</NavLink></li>
        <li><NavLink to='/notice' activeStyle={{ color: 'white' }}>Notice Board</NavLink></li>
        <li><NavLink to='/residents' activeStyle={{ color: 'white' }}>Residents</NavLink></li>
        <li><NavLink to='/account' activeStyle={{ color: 'white' }}>Account</NavLink></li>
        <li><a style={{ cursor: 'pointer' }} onClick={() => logoutHandler(props.onLogout, props.history.replace)}>Logout</a> </li>
      </ul>
    </React.Fragment>
  )
}

const mapPropsToDispatch = dispatch => {
  return {
    onLogout: () => dispatch(authLogout())
  }
}

export default connect(null, mapPropsToDispatch)(withRouter(navBar));