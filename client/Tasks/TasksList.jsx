

import React from 'react';
import { TaskOne } from './TaskOne.jsx';


// This component represents the TasksList page of this app
export class TasksList extends React.Component {

  renderTasks() {

    var p = this.props;

    // Map tasks to TaskRow array
    return p.tasks.map((task) => {

      return <TaskOne
        key={task._id}
        task={task}
        />;
    });
  }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

        <div>
          <h3>List with Tasks</h3>

          <ul>
            {this.renderTasks()}
          </ul>

        </div>

      );
    }
  }
