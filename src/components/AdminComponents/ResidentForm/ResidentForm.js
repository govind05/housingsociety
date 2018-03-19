import React from 'react';

import './ResidentForm.css';
import Spinner from '../../UI/Spinner2/Spinner2';

// Add resident page.
export default (props) => {
  return (
    <div >
      <form className='ResidentForm' onSubmit={props.onSubmit}>
        <input
          name='name'
          value={props.fields.name}
          onChange={props.onChange}
          type="text"
          placeholder='Name' />
        <input
          name='flatNo'
          value={props.fields.flatNo}
          onChange={props.onChange}
          type="number"
          placeholder='Flat No.' />
        <input
          name='floor'
          value={props.fields.floor}
          onChange={props.onChange}
          type="number"
          placeholder='Floor' />
        <input
          name='wing'
          value={props.fields.wing}
          onChange={props.onChange}
          type="text"
          placeholder='Wing' />
        {props.loading? <Spinner/> : <input type="submit" />}
      </form>
    </div>
  )
}
