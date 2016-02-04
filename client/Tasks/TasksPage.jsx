

import React from 'react';

import TasksText from './TasksText.jsx';

// This component represents the Tasks page of this app
export default class TasksPage extends React.Component {

/***************************************/
/* RENDER
/***************************************/

  render() {

    return (

      <div className="container">

        <h1>Tasks</h1>

        <TasksText />

      </div>

    );

  }

}
