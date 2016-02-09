

import React from 'react';

import { AppNavBar } from './AppNavBar.jsx';
import AccountsUIWrapper from './../../Accounts/AccountsUIWrapper.jsx';


// AppHeader component - represents the Header workspace of this App
export const AppHeader = () => (

  <div className="container">

    <h1>This is AppHeader</h1>

    <p>Meteor-React start-app -- <AccountsUIWrapper /></p>

    <AppNavBar />

  </div>

);
