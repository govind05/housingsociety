import React from 'react';

import Spinner from '../../UI/Spinner/Spinner';
import './ComplaintList.css';

export default (props) => {
  const noComplaints = (
    <div>
    <h3>No complaints to display...</h3>
    </div>
  )
  return (
    <div className='ComplaintList'>
      {
       !props.loading ? props.complaints.length === 0? noComplaints : props.complaints.reverse().map(complaint => (
          <div key={complaint._id}>
            <h1>{complaint.subject}</h1>
            <h3>
              FROM:{complaint.userName.toUpperCase()}
            </h3>
            <p>{complaint.message}</p>
          </div> 
        )): <Spinner />
      }
    </div>
  )
}
