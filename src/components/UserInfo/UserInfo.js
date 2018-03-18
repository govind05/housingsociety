import React from 'react';

import './UserInfo.css';

export default (props) => {
  let { user } = props
  return (
    <div className='UserInfo'>
      <div className='Image'>
      </div>
      <div className='Info'>
        <p>Username: {user.userName}</p>
        <p>First Name: {user.firstName}</p>
        <p>Last Name: {user.lastName}</p>
      </div>
    </div>
  )
}
