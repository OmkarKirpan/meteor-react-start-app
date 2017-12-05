import React from 'react';
import ReactDOM from 'react-dom';

import { Routes } from './Routes.js';

import { AppHeader } from './AppHeader/AppHeader';
import { AppSideLeft } from './AppSideLeft/AppSideLeft';
import { AppSideRight } from './AppSideRight/AppSideRight';
import { AppFooter } from './AppFooter/AppFooter';


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
