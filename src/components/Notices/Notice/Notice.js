import React from 'react';

import './Notice.css'

const notice = (props) => {
  let classes;
  if (props.showBody) {
    classes = ['Body', 'Open']
  } else {
    classes = ['Body', 'Closed'];
  }
  return (
    <div className='Notice'>
      <h3>{props.title}</h3>
      <span>Date: {props.date}</span>
      <p>{props.subtitle}</p>
      <div className={classes.join(' ')}>
        {props.showBody ? <p>{props.body}</p> : null}
      </div>
      <button onClick={() => props.onReadMore(props.id)}>{props.showBody ? 'Show Less' : 'Show More'}</button>
    </div>

  );
}

export default notice;