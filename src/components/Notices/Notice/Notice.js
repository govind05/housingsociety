import React from 'react';
import moment from 'moment';

import './Notice.css'

const notice = (props) => {
  let classes = ['Body'];
  if (props.showBody) {
    classes = ['Body', 'Opened']
  }
  let date = moment(props.date).format('Do MMMM YYYY');
  let time = moment(props.date).format('hh:mm a')
  return (
    <div className='Notice'>
      <h2>{props.title}</h2>
      <span>Date: {date}</span>
      <p>Time: {time}</p>
      <p>{props.subtitle}</p>
      <div className={classes.join(' ')}>
        {props.showBody ? <p>{props.body}</p> : null}
      </div>
      <button onClick={() => props.onReadMore(props.id)}>{props.showBody ? 'Show Less' : 'Show More'}</button>
    </div>

  );
}

export default notice;