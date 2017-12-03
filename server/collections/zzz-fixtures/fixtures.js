

import TasksFixtures from './TasksFixtures';
import UsersFixtures from './UsersFixtures';


Meteor.startup(function(){
  
  UsersFixtures();

  TasksFixtures();

});
