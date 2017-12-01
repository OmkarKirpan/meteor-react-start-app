

import React from 'react';


import { TaskTextPlain } from './TaskTextPlain.js';
import { TaskTextFormEdit } from './TaskTextFormEdit.js';


// This component represents the Tasks page of this app
export class TaskText extends React.Component {

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
              processTextTyping={p.processTextTyping.bind(this)}
              processTextClear={p.processTextClear.bind(this)}
              processTextReset={p.processTextReset.bind(this)}
              endTextEditSave={p.endTextEditSave.bind(this)}
              endTextEditClear={p.endTextEditClear.bind(this)}

            /> : <TaskTextPlain

              task={ p.task }
              beginTextEdit={p.beginTextEdit.bind(this)}
            />

          }

        </span>

      );
    }
  }
