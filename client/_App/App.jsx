import React from 'react';
import ReactDOM from 'react-dom';


// App component - represents the whole app

App = React.createClass({

/***************************************/
/* RENDER
/***************************************/

  render() {

    return (

      <div>

        <AppHeader />

        <HomePage />

        <AppFooter />

      </div>

    );

  }

});


//==========================================================================
Meteor.startup(function () {

  // Use Meteor.startup to render the component after the page is ready

  ReactDOM.render(<App />, document.getElementById("App"));

});
