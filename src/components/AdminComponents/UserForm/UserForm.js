import React from 'react';

import './UserForm.css';

export default (props) => {
  return (
    <div >
      <form className='UserForm' onSubmit={props.onSubmit}>
        <input
          name='userName'
          value={props.fields.userName}
          onChange={props.onChange}
          type="text"
          placeholder='Username' />
        <input
          name='password'
          value={props.fields.password}
          onChange={props.onChange}
          type="password"
          placeholder='Password' />
        <input type="submit" />
      </form>
    </div>
  )
}
