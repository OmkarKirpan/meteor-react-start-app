

import React from 'react';

import HomePageTitle from './HomePageTitle.jsx';
import HomePageBody from './HomePageBody.jsx';

// This component represents the Home page of this app
export default class HomePage extends React.Component {

/***************************************/
/* RENDER
/***************************************/

  render() {

    return (

      <div className="container">

        <HomePageTitle />

        <HomePageBody />

      </div>

    );

  }

}
