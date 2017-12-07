import React from 'react';
import { Link, browserHistory } from 'react-router';
import AccountsUIWrapper from './../../Accounts/AccountsUIWrapper.js';

// AppNavBarr component - represents the Navigation Buttons of this App
export const AppHeader = () => (

  <div className='app-header'>
  
    <div className='nav-container'>
    
      <nav>

          <h1>Meteor-React start-app</h1>

          <Link to="/home"><button>Home</button></Link>

          <Link to="/tasks"><button>Tasks</button></Link>
          
          <Link to="/about"><button>About us</button></Link>
        
          <Link to="/admin"><button>Admin</button></Link>
          
          <AccountsUIWrapper />

      </nav>

    </div>

  </div>

);
