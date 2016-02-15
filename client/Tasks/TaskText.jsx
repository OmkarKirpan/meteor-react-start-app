

import React from 'react';


// This component represents the Tasks page of this app
export class TaskText extends React.Component {

  constructor(props) {
        super(props);
    }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

          <span className="text">
            <strong>{p.task.username}</strong>: {p.task.text}
          </span>

    );
  }
}
