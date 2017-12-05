

import React from 'react';


export default class TaskTextPlain extends React.Component {

  constructor(props) {
        super(props);
    }

  onDoubleClick() {
    var p = this.props
    p.beginTextEdit(p.task._id, p.task.text)
  }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

          <span className="text">
            <strong>{p.task.username}</strong>:
            <span onDoubleClick={this.onDoubleClick.bind(this)}>
              {p.task.text}
            </span>
          </span>

    );
  }
}
