

import React from 'react';

import { Link, browserHistory } from 'react-router';

// AppNavBarr component - represents the Navigation Buttons of this App
export default class AppNavBar extends React.Component {

/***************************************/
/* RENDER
/***************************************/

  render() {

    return (

      <div>

        <Link to="/home"><button>Home</button></Link>

        <Link to="/tasks"><button>Tasks</button></Link>

        <Link to="/admin"><button>Admin</button></Link>

      </div>

    );

  }

}
