

import React from 'react';

import TaskDelete from './TaskDelete';
import TaskOpenClosed from './TaskOpenClosed';
import TaskPrivate from './TaskPrivate';
import TaskText from './TaskText';


export default class TaskOne extends React.Component {

  constructor(props) {
        super(props);
    }


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
          <td>
          <TaskOpenClosed
            task={ p.task }
            toggleChecked={p.toggleChecked}
          />
          </td><td>
          <strong>HERE URGENCY!</strong>
          </td>
          <td>
            { p.userOwnsTask ?
              <TaskPrivate
                task={ p.task }
                togglePrivate={p.togglePrivate}
              /> : "" 
            }
          </td>
          <td>
            { p.userOwnsTask ?
              <TaskDelete
                task={ p.task }
                deleteThisTask={p.deleteThisTask}
              /> : ""
            }
          </td>
        </tr>


    );
  }
}
