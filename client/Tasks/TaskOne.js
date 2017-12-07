

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

        <li className={p.taskClassName} >

          { p.showPrivateButton ?
            <TaskPrivate
              task={ p.task }
              togglePrivate={p.togglePrivate}
            /> : ""
          }
          
          <TaskCheck
            task={ p.task }
            toggleChecked={p.toggleChecked}
          />

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

          <TaskDelete
            task={ p.task }
            deleteThisTask={p.deleteThisTask}
          />

        </li>


    );
  }
}
