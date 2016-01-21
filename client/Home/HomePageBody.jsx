

import React from 'react';


// This component presents the body of the Home page
HomePageBody = React.createClass({

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
          <li>Meteor, React, and NPM</li>
          <li>A basic, static set-up with a Home page, a header and a footer</li>
          <li>User Login (create account, login/logout, change password)</li>
      	</ul>

        <p>See also the <a href="http://www.annotatedjs.com/meteor-react/tutorials/start-app/" target="_blank">tutorial</a> that goes along with this start-app.</p>

      </div>

    );

  }

});
