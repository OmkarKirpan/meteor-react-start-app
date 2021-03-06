


import { Meteor } from 'meteor/meteor';

import Tasks from '/lib/collections/tasks/declare';


//Meteor.publish('tasks', () => Tasks.find());


// Only publish tasks that are public or belong to the current user
Meteor.publish("tasks", function () {
  return Tasks.find({
    $or: [
      { isPrivate: {$ne: true} },
      { owner: this.userId }
    ]
  });
});
