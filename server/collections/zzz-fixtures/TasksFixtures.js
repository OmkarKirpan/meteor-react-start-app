

import Tasks from '/lib/collections/tasks/declare';


/***************************************/
/* TASKS
/***************************************/

function TasksFixtures() {

  if (!Tasks.findOne()) {

    let user = Accounts.findUserByUsername('UserOne');

    Tasks.insert({
      text: "Public Not Completed Task 1",
      createdAt: 'ISODate("2016-01-01T08:35:46.522Z")',
      private: false,
      owner: user._id,
      username: user.username
    });

    Tasks.insert({
      text: "Public Completed 2",
      createdAt: 'ISODate("2016-01-02T08:35:46.522Z")',
      private: false,
      checked: true,
      owner: user._id,
      username: user.username
    });

    Tasks.insert({
      text: "Private Not Completed Task 3",
      createdAt: 'ISODate("2016-01-03T08:35:46.522Z")',
      private: true,
      owner: user._id,
      username: user.username
    });

    Tasks.insert({
      text: "Private Completed Task 4",
      createdAt: 'ISODate("2016-01-04T08:35:46.522Z")',
      private: true,
      checked: true,
      owner: user._id,
      username: user.username
    });

    // =====================================================
  
    user = Accounts.findUserByUsername('UserTwo');

    Tasks.insert({
      text: "User Two - Public Not Completed Task ZZZ",
      createdAt: 'ISODate("2017-01-01T08:35:46.522Z")',
      private: false,
      owner: user._id,
      username: user.username
    });

  }
}

export default TasksFixtures;

