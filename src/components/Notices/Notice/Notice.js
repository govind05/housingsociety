import React from 'react';
import moment from 'moment';

import './Notice.css'

const notice = (props) => {
  // To show the message body.
  let classes = ['Body'];
  if (props.showBody) {
    classes = ['Body', 'Opened']
  }
  let date = moment(props.date).format('Do MMMM YYYY hh:mm a');
  return (
    <div className='Notice'>
      <h1>{props.title}</h1>
      <span>{date.toUpperCase()}</span>
      <p id='subtitle'>{props.subtitle}</p>
      <div className={classes.join(' ')}>
        {props.showBody ? <p>{props.body}</p> : null}
      </div>
      <button
        onClick={() => props.onReadMore(props.id)}>
        {props.showBody ? 'Show Less' : 'Show More'}
      </button>
    </div>

  );
}

export default notice;