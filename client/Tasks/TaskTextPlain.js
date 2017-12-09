

import React from 'react';


export default class TaskTextPlain extends React.Component {

  constructor(props) {
        super(props);
    }

  onDoubleClick = () => {
    
    var p = this.props
    p.beginTextEdit(p.task._id, p.task.text)
  }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

          <span>
            
            <span onDoubleClick={this.onDoubleClick}>
              {p.task.text}
            </span>
          </span>

    );
  }
}
