

import React from 'react';


export default class TasksHeader extends React.Component {

  constructor(props) {
        super(props);
    }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (
        <div>
          <h3>Todo List ({p.incompleteCount})</h3>
        </div>

      );
    }
  }
