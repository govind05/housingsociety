import React from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

import './Wings.css';

export default (props) => {
  return (
    <div className='Wings'>
      {
        props.wings.map(wing =>
          <NavLink
            key={wing}
            to={`/residents/${wing}`}
            style={{ borderBottom: '5px solid #ccc' }}
            activeStyle={{ borderBottom: '5px solid #1B5E20' }}
          >
            {_.capitalize(wing)}
          </NavLink>)
      }
    </div>
  )
}
