


/***************************************/
/* USERS
/***************************************/

function UsersFixtures() {
  
  if (Meteor.users.find().count() === 0) {

    Accounts.createUser({
      'username': 'UserOne',
      'password': 'password'
    });

    Accounts.createUser({
      'username': 'UserTwo',
      'password': 'password'
    });

  }
}

export default UsersFixtures;
