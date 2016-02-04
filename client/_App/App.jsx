import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes.jsx';

import AppHeader from './AppHeader/AppHeader.jsx';
import AppFooter from './AppFooter/AppFooter.jsx';


// App component - represents the whole app
export default class App extends React.Component {

/***************************************/
/* RENDER
/***************************************/

  render() {

    return (

      <div>

        <AppHeader />

        {this.props.children}

        <AppFooter />

      </div>

    );

  }

}


//==========================================================================
Meteor.startup(function () {

  // Use Meteor.startup to render the component after the page is ready

  ReactDOM.render(<Routes />, document.getElementById("App"));

});
