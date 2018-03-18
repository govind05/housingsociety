import React from 'react';

import './ComplaintList.css';

export default (props) => {
  return (
    <div className='ComplaintList'>
      {
        props.complaints.map(complaint => (
          <div>
            complaint.
          </div>
        ))
      }
    </div>
  )
}
