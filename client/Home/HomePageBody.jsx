

import React from 'react';


// This component presents the body of the Home page
export default class HomePageBody extends React.Component {

/***************************************/
/* RENDER
/***************************************/

  render() {

    return (

      <div>

        <p>
          This start-app contains:
        </p>

        <ul>
          <li>Meteor version 1.3 with React</li>
					<li>NPM Packages: react react-dom react-router@2.0.0-rc5 history@2.0.0-rc2</li>
					<li>A basic lay-out with a header, body and a footer</li>
					<li>MDG's User Login (create account, login/logout, change password)</li>
					<li>Router with Navigation buttons</li>
					<li>Some 'pages': Home, Tasks, Admin and NotFound</li>
      	</ul>

        <p>See also the <a href="http://www.annotatedjs.com/meteor-react/tutorials/start-app/" target="_blank">tutorial</a> that goes along with this start-app.</p>

      </div>

    );

  }

}
