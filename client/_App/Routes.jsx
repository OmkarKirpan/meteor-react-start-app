

import React from "react";
import ReactDOM from "react-dom";

import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import { App } from './App.jsx';
import { HomePage } from './../Home/HomePage.jsx';
import TasksPage from './../Tasks/TasksPage.jsx';
import { AdminPage } from './../Admin/AdminPage.jsx';
import { NotFoundPage } from './../NotFound/NotFoundPage.jsx';


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
