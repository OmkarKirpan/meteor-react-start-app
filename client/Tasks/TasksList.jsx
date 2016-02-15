

import React from 'react';
import { TasksHeader } from './TasksHeader.jsx';
import { TasksFilter } from './TasksFilter.jsx';
import { TaskOne } from './TaskOne.jsx';


// This component represents the TasksList page of this app
export class TasksList extends React.Component {


/***************************************/
/* RENDER
/***************************************/
  renderTasks() {

    var p = this.props;

    // Map tasks to TaskRow array
    return p.tasks.map((task) => {

      var showPrivateButton = false;
      if (task.owner === Meteor.userId()) {
        showPrivateButton = "true";
        if (task.private) {
          task.privateBtnLbl = "private";
        } else {
          task.privateBtnLbl = "public";
        }
      }

      const taskClassName = (task.checked ? "checked" : "")
                                    + " "
                                    + (task.private ? "private" : "");

      return <TaskOne
        key={task._id}
        task={task}
        showPrivateButton={showPrivateButton}
        taskClassName={taskClassName}
        toggleChecked={p.toggleChecked.bind(this)}
        togglePrivate={p.togglePrivate.bind(this)}
        deleteThisTask={p.deleteThisTask.bind(this)}
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

          <TasksHeader
            incompleteCount={p.incompleteCount}
          />

          <TasksFilter
            toggleHideCompleted={p.toggleHideCompleted.bind(this)}
          />

          <ul>
            {this.renderTasks()}
          </ul>

        </div>

      );
    }
  }
