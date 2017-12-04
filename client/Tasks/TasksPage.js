
import { Meteor } from 'meteor/meteor';
import React from 'react';
import reactMixin from 'react-mixin';
import Tasks from '/lib/collections/tasks/declare';

import { PageTitle } from './../_App/PageTitle.js'
import { TasksList } from './TasksList.js';
import { TaskNew } from './TaskNew.js';


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

   toggleHideCompleted() {
    this.setState({
      hideCompleted: ! this.state.hideCompleted
    });
  }

   handleSubmit(event) {
    event.preventDefault();

    Meteor.call("tasks.add", this.state.text);

    // Clear form
    this.setState({text: ""});
  }

   onTextChange(event) {
    this.setState({text: event.target.value});
  }

   toggleChecked(taskId, taskCheck) {
    // Set the checked property to the opposite of its current value
    Meteor.call("tasks.setChecked", taskId, ! taskCheck);
  }

   togglePrivate(taskId, taskPrivate) {
    Meteor.call("tasks.setPrivate", taskId, ! taskPrivate);
  }

   deleteThisTask(taskId) {
    Meteor.call("tasks.remove", taskId);
  }

   beginTextEdit(taskId, taskText) {
    var tmpEdit = this.state.edit
    tmpEdit.taskId = taskId
    tmpEdit.text = taskText
    tmpEdit.taskText = taskText
    this.setState({edit: tmpEdit})
  }

   processTextTyping(latestText) {
    var tmpEdit = this.state.edit
    tmpEdit.text = latestText
    this.setState({edit: tmpEdit})
  }

   processTextClear() {
    // Clear only Text
   var tmpEdit = this.state.edit;
   tmpEdit.text = "";
   this.setState({edit: tmpEdit});
  }

   processTextReset() {
    // Reset form
   var tmpEdit = this.state.edit
   tmpEdit.text = this.state.edit.taskText
   this.setState({edit: tmpEdit})
  }

   endTextEditSave(finalText) {
    if (finalText === "") {
      finalText = "?-?-?";
    }
    Meteor.call("tasks.updateText", this.state.edit.taskId, finalText)
    this.endTextEditClear()
  }

   endTextEditClear() {
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
            onTextChange={this.onTextChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
          /> : ""
        }

        <TasksList
          tasks={d.tasks}
          incompleteCount={d.incompleteCount}
          edit={s.edit}
          toggleHideCompleted={this.toggleHideCompleted.bind(this)}
          toggleChecked={this.toggleChecked.bind(this)}
          togglePrivate={this.togglePrivate.bind(this)}
          deleteThisTask={this.deleteThisTask.bind(this)}
          beginTextEdit={this.beginTextEdit.bind(this)}
          processTextTyping={this.processTextTyping.bind(this)}
          processTextClear={this.processTextClear.bind(this)}
          processTextReset={this.processTextReset.bind(this)}
          endTextEditSave={this.endTextEditSave.bind(this)}
          endTextEditClear={this.endTextEditClear.bind(this)}
        />

      </div>

    )

  }

}


reactMixin(TasksPage.prototype, ReactMeteorData);
