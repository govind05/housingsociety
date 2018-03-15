import React from 'react';

import Notice from './Notice/Notice';

const notices = (props) => {
  return (
    <div>
      <h1>Notice Board</h1>
      <hr />
      {
        props.data.map((notice, i) => {
          console.log(notice)
          let showBody = props.currentNotice === notice._id;
          return (
            <Notice
              key={notice._id}
              id={notice._id}
              date={notice.date}
              title={notice.title}
              subtitle={notice.subtitle}
              body={notice.body}
              showBody={showBody}
              onReadMore={props.onReadMore}
            />
          );
        }
        )
      }
    </div>
  )
}

export default notices;