

import React from 'react';


export default class TasksFilter extends React.Component {

  constructor(props) {
        super(props);
    }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

        <label className="hide-completed">
            <input
              type="checkbox"
              readOnly={true}
              checked={p.hideCompleted}
              onClick={p.toggleHideCompleted.bind(this)} />
            Hide Completed Tasks
          </label>

      );
    }
  }
