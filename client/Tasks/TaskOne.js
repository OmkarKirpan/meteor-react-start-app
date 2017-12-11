

import React from 'react';

import TaskDelete from './TaskDelete';
import TaskOpenClosed from './TaskOpenClosed';
import TaskPrivate from './TaskPrivate';
import TaskText from './TaskText';


export default class TaskOne extends React.Component {

  constructor(props) {
        super(props);
    }

    isLoggedInUser() { return Meteor.userId() }
/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

        <tr className={p.taskListRowClass} >
          
          <td>
          <strong>{p.task.username}</strong>
          </td>
          <td>
          <TaskText
            task={ p.task }
            edit={p.edit}
            editTask={p.editTask}
            beginTextEdit={p.beginTextEdit}
            processTextTyping={p.processTextTyping}
            processTextClear={p.processTextClear}
            processTextReset={p.processTextReset}
            endTextEditSave={p.endTextEditSave}
            endTextEditClear={p.endTextEditClear}
          />
          </td>
          <TaskOpenClosed
            task={ p.task }
            toggleChecked={p.toggleChecked}
          />
          
            { p.userOwnsTask ?
              <TaskPrivate
                task={ p.task }
                togglePrivate={p.togglePrivate}
              /> 
              : this.isLoggedInUser() ? <td></td>
              : null
            }
          
          
          { p.userOwnsTask ?
            <TaskDelete
              task={ p.task }
              deleteThisTask={p.deleteThisTask}
            /> 
            : this.isLoggedInUser() ? <td></td>
            : null
          }
          
        </tr>


    );
  }
}
