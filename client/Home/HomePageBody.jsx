

import React from 'react';


// This component presents the body of the Home page
export const HomePageBody = () => (

  <div>

    <p>
      This start-app contains:
    </p>

    <ul>
      <li>Meteor version 1.3 with React and React Router</li>
			<li>NPM Packages: react react-dom react-router@2.0.0-rc5 history@2.0.0-rc2 react-mixin babel@6.5.1</li>
			<li>ES6: arrow functions</li>
			<li>A basic lay-out with a header, body and a footer</li>
			<li>MDG's User Login (create account, login/logout, change password)</li>
			<li>Router with Navigation buttons</li>
			<li>Some static 'pages': Home, Admin and NotFound</li>
      <li>A Tasks Page with a simple list of tasks from the Mongo database</li>
  	</ul>

    <p>See also the <a href="http://www.annotatedjs.com/meteor-react/tutorials/start-app/" target="_blank">tutorial</a> that goes along with this start-app.</p>

  </div>

);
