import React from 'react';

import './Notice.css'

const notice = (props) => {
  let classes = ['Body'];
  if (props.showBody) {
    classes = ['Body', 'Opened']
  }
  let date = new Date(props.date).toDateString();
  let hours = new Date(props.date).getHours();
  let minutes = new Date(props.date).getMinutes();
  return (
    <div className='Notice'>
      <h3>{props.title}</h3>
      <span>Date: {date}</span>
      <p>Time: {`${hours > 12 ? hours - 12 + ':' + minutes + ' pm' : hours + ':' + minutes + ' am'}`}</p>
      <p>{props.subtitle}</p>
      <div className={classes.join(' ')}>
        {props.showBody ? <p>{props.body}</p> : null}
      </div>
      <button onClick={() => props.onReadMore(props.id)}>{props.showBody ? 'Show Less' : 'Show More'}</button>
    </div>

  );
}

export default notice;