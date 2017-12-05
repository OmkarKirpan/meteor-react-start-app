import React from 'react';
import { Link, browserHistory } from 'react-router';
import AccountsUIWrapper from './../../Accounts/AccountsUIWrapper.js';

// AppNavBarr component - represents the Navigation Buttons of this App
export const AppHeader = () => (

  <div className='app-header'>
  
    <div className='nav-container'>
    
      <nav>

        <ul className='nav-left'>

          <li><h1>Meteor-React start-app</h1></li>

          <li><Link to="/home"><button>Home</button></Link></li>

          <li><Link to="/tasks"><button>Tasks</button></Link></li>

          <li><Link to="/about"><button>About us</button></Link></li>

        </ul>

        <ul className='nav-right'>
        
          <li><Link to="/admin"><button>Admin</button></Link></li>

          <li><AccountsUIWrapper /></li>

        </ul>

      </nav>

    </div>

  </div>

);
