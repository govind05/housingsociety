import React from 'react';

import './UserInfo.css';

export default (props) => {
  let { user} = props
  return (
    <div className='UserInfo'>
      <div className='Image'>
      </div>
      <div className='Info'>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Flat No: {user.flatNo}</p>
      </div>

    </div>
  )
}
