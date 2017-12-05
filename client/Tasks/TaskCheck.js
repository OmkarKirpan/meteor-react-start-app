

import React from 'react';


export default class TaskCheck extends React.Component {

  constructor(props) {
    super(props);
  }

  onClick() {

    var p = this.props;

    p.toggleChecked(p.task._id, p.task.checked)
  }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

        <input
          type="checkbox"
          readOnly={true}
          checked={p.task.checked}
          onClick={this.onClick.bind(this)}
        />

    );
  }
}
