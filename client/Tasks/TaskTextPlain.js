

import React from 'react';


export default class TaskTextPlain extends React.Component {

  constructor(props) {
        super(props);
    }

  onDoubleClick = () => {
    console.log('onDoubleClick', this.props);
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
            
            <span onDoubleClick={this.onDoubleClick}>
              {p.task.text}
            </span>
          </span>

    );
  }
}
