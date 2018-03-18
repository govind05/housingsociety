import React from 'react';

import Spinner from '../../UI/Spinner2/Spinner2';
import './NoticeForm.css';

export default (props) => {
  return (
    <div >
      <form className='NoticeForm' onSubmit={props.onSubmit}>
        <input
          name='title'
          value={props.fields.title}
          onChange={props.onChange}
          type="text"
          placeholder='Title' />
        <textarea
          name='subject'
          value={props.fields.subject}
          onChange={props.onChange}
          type="text"
          placeholder='Subject' />
        <textarea
          name='body'
          value={props.fields.body}
          onChange={props.onChange}
          type="text"
          placeholder='Write Notice here...' />
        {props.loading? <Spinner/> : <input type="submit" />}
      </form>
    </div>
  )
}
