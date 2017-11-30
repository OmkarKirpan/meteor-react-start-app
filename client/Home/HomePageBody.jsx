

import React from 'react';


// This component presents the body of the Home page
export const HomePageBody = () => (

  <div>

    <p>
      This start-app contains:
    </p>

    <ul>
      <li>Meteor release 1.5.2.1 with React and React Router</li>
      <li>NPM Packages: 
        <ul>
          <li>react@15.6.2</li>
          <li>react-dom@15.6.2</li>
          <li>react-router@2.8.1</li>
          <li>history@3.3.0</li>
          <li>react-mixin@4.0.0</li>
          <li>babel@6.23.0</li>
        </ul>
      </li>
      <li>ES6: arrow functions, import/export modules</li>
      <li>A reactive lay-out based on flexbox with a header, body and a footer and three columns</li>
      <li>User Login (create account, login/logout, change password)</li>
      <li>React Router with Navigation buttons</li>
      <li>Some static ‘pages’: Home, Admin and NotFound</li>
      <li>Dynamic Task page<br />All features of simple-todos-react (and some more),<br />such as:
        <ul>
          <li>Add a new task</li>
          <li>Edit the text of an existing task <small>(double click on the text)</small></li>
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
    <p>Find the source at <a href="https://github.com/AnnotatedJS/meteor-react-start-app/" target="_blank">GitHub</a></p>

  </div>

);
