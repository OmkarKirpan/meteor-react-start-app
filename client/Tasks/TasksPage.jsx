
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { TasksList } from './TasksList.jsx';

import Tasks from '/lib/collections/tasks/declare';
import reactMixin from 'react-mixin';


Meteor.subscribe("tasks");


// This component represents the Tasks page of this app
export default class TasksPage extends React.Component {

  // The getMeteorData method makes Meteor data available and puts them on this.data
  getMeteorData() {
    let query = {};

    return {
      tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
      incompleteCount: Tasks.find({checked: {$ne: true}}).count(),
      currentUser: Meteor.user()

    }
  }

/***************************************/
/* RENDER
/***************************************/

  render() {

    return (

      <div className="container">

        <h1>Tasks</h1>

        <TasksList
          tasks={this.data.tasks}
        />

      </div>

    )

  }

}


reactMixin(TasksPage.prototype, ReactMeteorData);
