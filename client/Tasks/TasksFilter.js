

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
        <span className='textalignleft'>
          
          <span>
            <input
              type="checkbox"
              readOnly={true}
              checked={p.hideCompleted}
              onClick={p.toggleHideCompleted}
            />
            <label className="hide-completed">
              Hide Completed Tasks
            </label>
          </span>
        </span>
      );
    }
  }
