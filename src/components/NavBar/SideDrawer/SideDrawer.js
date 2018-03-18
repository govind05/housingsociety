import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FaUser, FaSignOut } from 'react-icons/lib/fa';
import { MdEventNote, MdPeople } from 'react-icons/lib/md';

import Backdrop from '../Backdrop/Backdrop';
import { authLogout } from '../../../store/actions/users';
import { logoutHandler } from '../../../shared/utility';

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
          <li><NavLink to='/account' activeStyle={{ background: "#81C784", color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
              <FaUser />
              Account
            </div>
          </NavLink></li>
          <li><NavLink to='/notice' activeStyle={{ background: "#81C784", color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }} >
              <MdEventNote />
              Notice Board
            </div>
          </NavLink></li>
          <li><NavLink to='/residents' activeStyle={{ background: "#81C784", color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }} >
              <MdPeople />
              Residents
            </div>
          </NavLink></li>
          <li><a style={{ cursor: 'pointer' }} onClick={() => logoutHandler(props.onLogout, props.history.replace)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'  }} >
              <FaSignOut />
              Logout
            </div>
          </a></li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

const mapPropsToDispatch = dispatch => {
  return {
    onLogout: () => dispatch(authLogout())
  }
}

export default connect(null, mapPropsToDispatch)(withRouter(sideDrawer));
