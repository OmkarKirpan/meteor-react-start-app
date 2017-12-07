

import React from 'react';

import TaskDelete from './TaskDelete';
import TaskCheck from './TaskCheck';
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

        <tr className={p.taskClassName} >
          
          <td>
          <TaskCheck
            task={ p.task }
            toggleChecked={p.toggleChecked}
          />
          </td>
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
          { p.showPrivateButton ?
            <TaskPrivate
              task={ p.task }
              togglePrivate={p.togglePrivate}
            /> : ""
          }
          </td>
          <td>
          <TaskDelete
            task={ p.task }
            deleteThisTask={p.deleteThisTask}
          />
          </td>
        </tr>


    );
  }
}
