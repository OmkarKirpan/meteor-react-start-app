

import React from 'react';

import TasksFilter from './TasksFilter';
import TaskOne from './TaskOne';


export default class TasksList extends React.Component {

  constructor(props) {
        super(props);
    }


  tableHeaderTitleColSpan()  { return Meteor.userId() ?  "6" : "4" }

  isLoggedInUser() { return Meteor.userId() }

  renderTasks() {

    var p = this.props;
    var editTask;

    // Map tasks to TaskRow array
    return p.tasks.map((task) => {

      const userOwnsTask = (task.owner === Meteor.userId()) ? true : false;

      task.openClosedBtnLbl = (task.isOpen) ? "open" : "closed";
      task.openClosedClassName = (task.isOpen) ? " taskopen " : " taskclosed ";

      if (task.owner === Meteor.userId()) {

        task.privatePublicBtnLbl = (task.isPrivate) ? "private" : "public";
        task.privatePublicClassName = (task.isPrivate) ? " taskprivate " : " taskpublic ";
        
        editTask = (p.edit.taskId === task._id) ? true : false;
      }

      const taskListRowClass = ' taskListRowClass ';
      
      return <TaskOne
        key={task._id}
        task={task}
        edit={p.edit}
        editTask={editTask}
        userOwnsTask={userOwnsTask}
        taskListRowClass={taskListRowClass}
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

          <TasksFilter
            toggleHideCompleted={p.toggleHideCompleted}
          />

          <table className='gc-table taskslisttable'>
            <thead className='taskslisttablehead'>
              <tr>
                <th 
                  colSpan={ this.tableHeaderTitleColSpan() }
                >
                <h3>Tasks List</h3>Tasks in this list: {p.incompleteCount}</th>
              </tr>
              <tr>
                <th>User</th>
                <th>Task</th>
                <th>Task State</th>
                <th>Urgency</th>
                { this.isLoggedInUser() ? 
                  <th>Public/Private</th>
                  : null }
                  { this.isLoggedInUser() ? 
                    <th>Remove</th>
                  : null
                }
              </tr>
            </thead>
            <tbody>
              {this.renderTasks()}
            </tbody>
          </table>

        </div>

      );
    }
  }
