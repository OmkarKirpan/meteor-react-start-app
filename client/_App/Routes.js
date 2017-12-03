

import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import { App } from './App.js';
import { HomePage } from './../Home/HomePage.js';
import TasksPage from './../Tasks/TasksPage.js';
import { AdminPage } from './../Admin/AdminPage.js';
import { NotFoundPage } from './../NotFound/NotFoundPage.js';


export const Routes = () => (

  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="home" component={HomePage} />
      <Route path="tasks" component={TasksPage} />
      <Route path="admin" component={AdminPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>

);