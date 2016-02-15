

import Tasks from '/lib/collections/tasks/declare';


Meteor.startup(function(){



  /***************************************/
  /* USERS
  /***************************************/

  if (Meteor.users.find().count() === 0) {

    Accounts.createUser({
      'username': 'UserOne',
      'password': 'password'
    });
    console.log('UserOne');

    Accounts.createUser({
      'username': 'UserTwo',
      'password': 'password'
    });
    console.log('UserTwo');

  }



  /***************************************/
  /* TASKS
  /***************************************/

  if (!Tasks.findOne()) {

    var userOne = Accounts.findUserByUsername('UserOne');

    console.log('userOne username: ' + userOne.username);

    Tasks.insert({
      text: "Public Not Completed Task 1",
      createdAt: 'ISODate("2016-01-01T08:35:46.522Z")',
      private: false,
      owner: userOne._id,
      username: userOne.username
    });
    console.log('Task 1');

    Tasks.insert({
      text: "Public Completed 2",
      createdAt: 'ISODate("2016-01-02T08:35:46.522Z")',
      private: false,
      checked: true,
      owner: userOne._id,
      username: userOne.username
    });

    Tasks.insert({
      text: "Private Not Completed Task 3",
      createdAt: 'ISODate("2016-01-03T08:35:46.522Z")',
      private: true,
      owner: userOne._id,
      username: userOne.username
    });

    Tasks.insert({
      text: "Private Completed Task 4",
      createdAt: 'ISODate("2016-01-04T08:35:46.522Z")',
      private: true,
      checked: true,
      owner: userOne._id,
      username: userOne.username
    });
  }






});
