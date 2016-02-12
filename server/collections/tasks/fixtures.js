

import Tasks from '/lib/collections/tasks';


if (Meteor.isServer){

  Meteor.startup(function(){

    // Create demo task
    if (!Tasks.findOne()) {

      Tasks.insert({
        text: "First Task 1",
        createdAt: new Date(),
        private: false
      });

      Tasks.insert({
        text: "Another Task 2",
        createdAt: new Date(),
        private: false
      });

      Tasks.insert({
        text: "Private Task 3",
        createdAt: new Date(),
        private: true
      });
    }

  });

}
