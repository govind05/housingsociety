import React from 'react'

import './Spinner2.css';

export default () => {
  return (
    <div style={{display:'flex', justifyContent: 'flex-end'}}>
    <div className="lds-ellipsis" style={{alignSelf: 'right'}}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
