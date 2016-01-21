

Meteor.startup(function(){

  // Create demo users
  if (Meteor.users.find().count() === 0) {
    Accounts.createUser({'username': 'UserOne', 'password': 'password'});
    Accounts.createUser({'username': 'UserTwo', 'password': 'password'});
  }

});
