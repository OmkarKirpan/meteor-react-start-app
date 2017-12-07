

import React from 'react';


import TaskTextPlain from './TaskTextPlain';
import TaskTextFormEdit from './TaskTextFormEdit';


// This component represents the Tasks page of this app
export default class TaskText extends React.Component {

  constructor(props) {
        super(props);
    }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

        <span>

          { p.editTask ?

            <TaskTextFormEdit
              task={p.task}
              edit={p.edit}
              editText={p.edit.text}
              frmClassName="new-task"
              processTextTyping={p.processTextTyping}
              processTextClear={p.processTextClear}
              processTextReset={p.processTextReset}
              endTextEditSave={p.endTextEditSave}
              endTextEditClear={p.endTextEditClear}

            /> : <TaskTextPlain

              task={ p.task }
              beginTextEdit={p.beginTextEdit}
            />

          }

        </span>

      );
    }
  }
