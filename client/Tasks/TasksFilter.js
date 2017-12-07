

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
        <div className='filter tasksfilter'>
          
          <div>
            <input
              type="checkbox"
              readOnly={true}
              checked={p.hideCompleted}
              onClick={p.toggleHideCompleted}
            />
            <label className="hide-completed">
              Hide Completed Tasks
            </label>
          </div>
        </div>
      );
    }
  }
