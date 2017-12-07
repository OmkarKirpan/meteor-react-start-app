

import React from 'react';

import TasksHeader from './TasksHeader';
import TasksFilter from './TasksFilter';
import TaskOne from './TaskOne';


export default class TasksList extends React.Component {

  constructor(props) {
        super(props);
    }


/***************************************/
/* RENDER
/***************************************/
  renderTasks() {

    var p = this.props;

    // Map tasks to TaskRow array
    return p.tasks.map((task) => {

      var showPrivateButton = false;
      var editTask = false;
      if (task.owner === Meteor.userId()) {
        showPrivateButton = "true";
        if (task.private) {
          task.privateBtnLbl = "private";
        } else {
          task.privateBtnLbl = "public";
        }
        if (p.edit.taskId === task._id) {
          editTask = true;
        }
      }

      const taskClassName =  "task-li "
                              + (task.checked ? "task-checked " : "")
                              + (task.private ? "task-private" : "");

      return <TaskOne
        key={task._id}
        task={task}
        edit={p.edit}
        editTask={editTask}
        showPrivateButton={showPrivateButton}
        taskClassName={taskClassName}
        toggleChecked={p.toggleChecked}
        togglePrivate={p.togglePrivate}
        deleteThisTask={p.deleteThisTask}
        beginTextEdit={p.beginTextEdit}
        processTextTyping={p.processTextTyping}
        processTextClear={p.processTextClear}
        processTextReset={p.processTextReset}
        endTextEditSave={p.endTextEditSave}
        endTextEditClear={p.endTextEditClear}
      />;

    });
  }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

        <div className='tasks-list'>

          <TasksHeader
            incompleteCount={p.incompleteCount}
          />

          <TasksFilter
            toggleHideCompleted={p.toggleHideCompleted}
          />

          <table>
            <tbody>
              {this.renderTasks()}
            </tbody>
          </table>

        </div>

      );
    }
  }
