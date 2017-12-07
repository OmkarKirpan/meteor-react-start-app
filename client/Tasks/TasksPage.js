
import { Meteor } from 'meteor/meteor';
import React from 'react';
import reactMixin from 'react-mixin';
import Tasks from '/lib/collections/tasks/declare';

import { PageTitle } from './../_App/PageTitle'
import TasksList from './TasksList';
import TaskNew from './TaskNew';


Meteor.subscribe("tasks");


export default class TasksPage extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      pageTitle: 'Manage Your Tasks',
      hideCompleted: false,
      text: '',
      edit: {
        isEdit: false,
        taskId:"",
        taskText: "",
        text: ""
      }
    };
  }

  // The getMeteorData method makes Meteor data available and puts them on this.data
  getMeteorData() {
    let query = {};

    if (this.state.hideCompleted) {
      // If hide completed is checked, filter tasks
      query = {checked: {$ne: true}};
    }

    return {
      tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
      incompleteCount: Tasks.find({checked: {$ne: true}}).count(),
      currentUser: Meteor.user()

    }
  }

  /***************************************/
  /* UI EVENTS & ACTIONS
  /***************************************/

   toggleHideCompleted = () => {
     console.log('toggleHideCompleted: ', this.state);
    this.setState({
      hideCompleted: ! this.state.hideCompleted
    });
  }

   handleSubmit = (event) => {
    event.preventDefault();

    Meteor.call("tasks.add", this.state.text);

    // Clear form
    this.setState({text: ""});
  }

   onTextChange = (event) => {
    this.setState({text: event.target.value});
  }

   toggleChecked = (taskId, taskCheck) => {
    // Set the checked property to the opposite of its current value
    Meteor.call("tasks.setChecked", taskId, ! taskCheck);
  }

   togglePrivate = (taskId, taskPrivate) => {
    Meteor.call("tasks.setPrivate", taskId, ! taskPrivate);
  }

   deleteThisTask = (taskId) => {
    Meteor.call("tasks.remove", taskId);
  }

   beginTextEdit = (taskId, taskText) => {
    var tmpEdit = this.state.edit
    tmpEdit.taskId = taskId
    tmpEdit.text = taskText
    tmpEdit.taskText = taskText
    this.setState({edit: tmpEdit})
  }

   processTextTyping= (latestText) => {
    var tmpEdit = this.state.edit
    tmpEdit.text = latestText
    this.setState({edit: tmpEdit})
  }

   processTextClear = () => {
    // Clear only Text
   var tmpEdit = this.state.edit;
   tmpEdit.text = "";
   this.setState({edit: tmpEdit});
  }

   processTextReset = () => {
    // Reset form
   var tmpEdit = this.state.edit
   tmpEdit.text = this.state.edit.taskText
   this.setState({edit: tmpEdit})
  }

   endTextEditSave = (finalText) => {
    if (finalText === "") {
      finalText = "?-?-?";
    }
    Meteor.call("tasks.updateText", this.state.edit.taskId, finalText)
    this.endTextEditClear()
  }

   endTextEditClear = () => {
    // Clear all
   var tmpEdit = this.state.edit
   tmpEdit.taskId = ""
   tmpEdit.taskText =""
   tmpEdit.text = ""
   this.setState({edit: tmpEdit})
  }


/***************************************/
/* RENDER
/***************************************/

  render() {

    var s = this.state;
    var p = this.props;
    var d = this.data;

    return (

      <div className="container">

        <PageTitle 
          pageTitle={s.pageTitle}
        />

        { d.currentUser ?
          <TaskNew
            text={s.text}
            onTextChange={this.onTextChange}
            handleSubmit={this.handleSubmit}
          /> : ""
        }

        <TasksList
          tasks={d.tasks}
          incompleteCount={d.incompleteCount}
          edit={s.edit}
          toggleHideCompleted={this.toggleHideCompleted}
          toggleChecked={this.toggleChecked}
          togglePrivate={this.togglePrivate}
          deleteThisTask={this.deleteThisTask}
          beginTextEdit={this.beginTextEdit}
          processTextTyping={this.processTextTyping}
          processTextClear={this.processTextClear}
          processTextReset={this.processTextReset}
          endTextEditSave={this.endTextEditSave}
          endTextEditClear={this.endTextEditClear}
        />

      </div>

    )

  }

}


reactMixin(TasksPage.prototype, ReactMeteorData);
