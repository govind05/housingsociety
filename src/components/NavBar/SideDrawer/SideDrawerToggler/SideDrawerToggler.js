import React from 'react';

import './SideDrawerToggler.css';

const sideDrawerToggler = (props) => (
  <div className='SideDrawerToggler' onClick={props.click}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default sideDrawerToggler;