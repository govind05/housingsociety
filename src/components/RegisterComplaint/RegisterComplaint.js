import React from 'react';

import './RegisterComplaint.css';

export default (props) => {
  return (
    <div >
      <form className='RegisterComplaint' onSubmit={props.onSubmitComplaint}>
        <input
          name='subject'
          value={props.subject}
          onChange={props.onChange}
          type="text"
          placeholder='Subject' />
        <textarea
          name='complaint'
          value={props.complaint}
          onChange={props.onChange}
          type="text"
          placeholder='Write your complaint here..' />
        <input type="submit" />
      </form>
    </div>
  )
}
