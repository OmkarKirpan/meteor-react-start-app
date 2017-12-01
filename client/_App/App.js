import React from 'react';
import ReactDOM from 'react-dom';

import { Routes } from './Routes.js';

import { AppHeader } from './AppHeader/AppHeader.js';
import { AppSideLeft } from './AppSideLeft/AppSideLeft.js';
import { AppSideRight } from './AppSideRight/AppSideRight.js';
import { AppFooter } from './AppFooter/AppFooter.js';


// App component - represents the whole app
export const App = ( props ) => (

  <div className="app-wrapper">

    <AppHeader />

    <main className="app-main">

      <div className="app-content">

        {props.children}

      </div>

      <AppSideLeft />

      <AppSideRight />

    </main>

    <AppFooter />

  </div>

);

//==========================================================================
Meteor.startup(function () {

  // Use Meteor.startup to render the component after the page is ready

  ReactDOM.render(<Routes />, document.getElementById("App"));

});
