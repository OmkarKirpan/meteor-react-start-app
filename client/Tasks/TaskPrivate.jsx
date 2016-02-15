

import React from 'react';


// This component represents the Tasks page of this app
export class TaskPrivate extends React.Component {

  constructor(props) {
    super(props);
  }

  togglePrivate() {

    var p = this.props;

    p.togglePrivate(p.task._id, p.task.private);
  }


/***************************************/
/* RENDER
/***************************************/

  render() {

    var p = this.props;

    return (

      <button className="toggle-private" onClick={this.togglePrivate.bind(this)}>
        { p.task.privateBtnLbl }
      </button>

    );

  }
}
