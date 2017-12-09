

import Tasks from '/lib/collections/tasks/declare.js';


// All Tasks collection related methods
Meteor.methods({

  'tasks.add'(text) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    check(text, String);

    Tasks.insert({
      text: text,
      createdAt: new Date(),
      isOpen: true,
      isPrivate: true,
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },

  'tasks.remove'(taskId) {
    if ( Meteor.userId() ) {

      const task = Tasks.findOne(taskId);

      // Make sure only the task owner can remove a task
      if (task.owner === Meteor.userId()) {
        Tasks.remove(taskId);
      } else {
        throw new Meteor.Error("not-authorized");
      } 
    } else {
      throw new Meteor.Error("not-authorized");
    }
    
  },

  'tasks.setChecked'(taskId, setIsOpen) {
    const task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error("not-authorized");
    }

    Tasks.update(taskId, { $set: { isOpen: setIsOpen} });
  },

  'tasks.setPrivate'(taskId, setIsPrivate) {
    const task = Tasks.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Tasks.update(taskId, { $set: { isPrivate: setIsPrivate } });
  },

  'tasks.updateText'(taskId, editText) {
    const task = Tasks.findOne(taskId);

    // Make sure only the task owner can edit the text of a task
    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    check(editText, String);

    Tasks.update(taskId, { $set: { text: editText } });
  },
});
