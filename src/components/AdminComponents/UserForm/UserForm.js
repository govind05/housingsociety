import React from 'react';

import './UserForm.css';
import Spinner from '../../UI/Spinner2/Spinner2';

// Add User page.
export default (props) => {
  return (
    <div >
      <form className='UserForm' onSubmit={props.onSubmit}>
        <input
          name='firstName'
          value={props.fields.firstName}
          onChange={props.onChange}
          type="text"
          placeholder='Firstname' />
        <input
          name='lastName'
          value={props.fields.lastName}
          onChange={props.onChange}
          type="text"
          placeholder='Lastname' />
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
        {props.loading? <Spinner/> : <input type="submit" />}
      </form>
    </div>
  )
}
