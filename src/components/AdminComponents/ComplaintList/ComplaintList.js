import React from 'react';

import './ComplaintList.css';

export default (props) => {
  return (
    <div className='ComplaintList'>
      {
        props.complaints.reverse().map(complaint => (
          <div key={complaint._id}>
            <h1>{complaint.subject}</h1>
            <h3>
              FROM:{complaint.userName.toUpperCase()}
            </h3>
            <p>{complaint.message}</p>
          </div>
        ))
      }
    </div>
  )
}
