

import React from 'react';

import TasksFilter from './TasksFilter';
import TaskOne from './TaskOne';


export default class TasksList extends React.Component {

  constructor(props) {
        super(props);
    }


  tableHeaderTitleColSpan()  { return Meteor.userId() ?  "5" : "3" }

  isLoggedInUser() { return Meteor.userId() }

  renderTasks() {

    var p = this.props;
    var editTask;

    // Map tasks to TaskRow array
    return p.tasks.map((task) => {

      const userOwnsTask = (task.owner === Meteor.userId()) ? true : false;

      task.openClosedBtnLbl = (task.isOpen) ? "todo" : "done";
      task.openClosedClassName = (task.isOpen) ? " tasklisttd taskopenclosed taskopen " : " tasklisttd taskopenclosed taskclosed ";

      if (task.owner === Meteor.userId()) {

        task.privatePublicBtnLbl = (task.isPrivate) ? "private" : "public";
        task.privatePublicClassName = (task.isPrivate) ? " tasklisttd taskpublicprivate taskprivate " : " tasklisttd taskpublicprivate taskpublic ";

        task.removeClassName = 'tasklisttd';
        
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

          

          <table className='gc-table taskslisttable'>
            <thead className='taskslisttablehead'>
              
              <tr className='filterrow'>
                <th 
                  colSpan='2'
                  className='textalignleft'
                >
                  <TasksFilter
                    toggleHideCompleted={p.toggleHideCompleted}
                  />
                </th>
                <th 
                  colSpan={ this.tableHeaderTitleColSpan() - 2 }
                  className='textalignright'
                >
                  <span className='textalignright'>Todos: {p.incompleteCount}</span>
                </th>
              </tr>
              <tr>
                <th colSpan={ this.tableHeaderTitleColSpan() }>
                  <h2>Tasks List</h2>
                </th>
              </tr>
              <tr>
                  <th>User</th>
                  <th>Task</th>
                  <th className='openclosedth'>Task State</th>
                  { this.isLoggedInUser() ? 
                    <th className='publicprivateth'>Public/Private</th>
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
