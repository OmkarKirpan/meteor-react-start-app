
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { TasksList } from './TasksList.jsx';
import { TaskNew } from './TaskNew.jsx';

import Tasks from '/lib/collections/tasks/declare';
import reactMixin from 'react-mixin';


Meteor.subscribe("tasks");


// This component represents the Tasks page of this app
export default class TasksPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
      text: ''
    };
  }

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
/* UI EVENTS & ACTIONS
/***************************************/

  handleSubmit(event) {
    event.preventDefault();

    Meteor.call("addTask", this.state.text);

    // Clear form
    this.setState({text: ""});
  }

  onTextChange(event) {
    this.setState({text: event.target.value});
  }


/***************************************/
/* RENDER
/***************************************/

  render() {

    return (

      <div className="container">

        <h1>Tasks</h1>

        { this.data.currentUser ?
          <TaskNew
            text={this.state.text}
            onTextChange={this.onTextChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
          /> : ""
        }

        <TasksList
          tasks={this.data.tasks}
        />

      </div>

    )

  }

}


reactMixin(TasksPage.prototype, ReactMeteorData);
