

import React from 'react';


export default class TaskDelete extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick() {

    var p = this.props;

    p.deleteThisTask(p.task._id)
  }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

        <button className="delete" onClick={this.onClick.bind(this)}>
            &times;
          </button>

    );
  }
}
