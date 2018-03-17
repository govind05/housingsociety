import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Backdrop from '../Backdrop/Backdrop';
import { authLogout } from '../../../store/actions/users';
import {logoutHandler} from '../../../shared/utility';

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
          <li><a style={{ cursor: 'pointer' }} onClick={() => logoutHandler(props.onLogout, props.history.replace)}>Logout</a> </li>
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
