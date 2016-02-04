

import React from 'react';

import AppNavBar from './AppNavBar.jsx';
import AccountsUIWrapper from './../../Accounts/AccountsUIWrapper.jsx';

// AppHeader component - represents the Header workspace of this App
export default class AppHeader extends React.Component {

/***************************************/
/* RENDER
/***************************************/

  render() {

    return (

      <div className="container">

        <h1>This is AppHeader</h1>

        <p>Meteor-React start-app -- <AccountsUIWrapper /></p>

        <AppNavBar />

      </div>

    );

  }

}
