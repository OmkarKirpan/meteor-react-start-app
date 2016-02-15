

import React from 'react';


// This component presents the body of the Home page
export const HomePageBody = () => (

  <div>

    <p>
      This start-app contains:
    </p>

    <ul>
      <li>Meteor release 1.3-modules-beta.5 with React and React Router</li>
      <li>NPM Packages: react react-dom react-router@2.0.0-rc5 history@2.0.0-rc2  react-mixin babel@6.5.1</li>
      <li>ES6: arrow functions</li>
      <li>A basic lay-out with a header, body and a footer</li>
      <li>User Login (create account, login/logout, change password)</li>
      <li>Router with Navigation buttons</li>
      <li>Some static ‘pages’: Home, Admin and NotFound</li>
      <li>All features of simple-todos-react, such as:
        <ul>
          <li>Add a new task</li>
          <li>List of tasks</li>
          <li>Counter with number of not completed tasks</li>
          <li>Filter or not completed tasks</li>
          <li>Change tasks from public to private and vice versa</li>
          <li>Change tasks from not-completed to completed and vice versa</li>
          <li>Remove tasks</li>
        </ul>
      </li>
  	</ul>

    <p>See also the <a href="http://www.annotatedjs.com/meteor-react/tutorials/start-app/" target="_blank">tutorial</a> that goes along with this start-app.</p>

  </div>

);
