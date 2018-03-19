import React from 'react';

import './RegisterComplaint.css';
import Spinner from '../../components/UI/Spinner2/Spinner2';

// Register Complaint component on Account page.
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
        {props.loading? <Spinner/>:<input type="submit" />}
      </form>
    </div>
  )
}
