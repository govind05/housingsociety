import React from 'react';

import Notice from './Notice/Notice';

const notices = (props) => {
  return (
    <div>
      <h1>Notice Board</h1>
      <hr />
      {
        props.data.map((notice, i) => {
          let showBody = props.currentNotice === notice.id ? true : false;
          return (
            <Notice
              key={notice.id}
              id={notice.id}
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