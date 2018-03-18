import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaUser, FaSignOut } from 'react-icons/lib/fa';
import { MdEventNote, MdPeople } from 'react-icons/lib/md';

import { authLogout } from '../../store/actions/users';
import { logoutHandler } from '../../shared/utility';

import './NavBar.css';

const navBar = (props) => {
  return (
    <React.Fragment>
      <ul className='NavBar'>
        <li>
          <NavLink to='/account' activeStyle={{ color: 'white', backgroundColor: '#1B5E20' }}>
            <div className='NavItem' >
              <FaUser style={{ alignSelf: 'center' }} size={40} />
              Account
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/notice' activeStyle={{ color: 'white', backgroundColor: '#1B5E20' }}>
            <div className='NavItem' >
              <MdEventNote style={{ alignSelf: 'center' }} size={40} />
              Notice Board
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/residents' activeStyle={{ color: 'white', backgroundColor: '#1B5E20' }}>
            <div className='NavItem' >
              <MdPeople style={{ alignSelf: 'center' }} size={40} />
              Residents
            </div>
          </NavLink>
        </li>
        <li>
          <a style={{ cursor: 'pointer' }} onClick={() => logoutHandler(props.onLogout, props.history.replace)}>
            <div className='NavItem' >
              <FaSignOut style={{ alignSelf: 'center' }} size={40} />
              Logout
            </div>
          </a>
        </li>
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