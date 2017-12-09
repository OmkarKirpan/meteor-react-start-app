import React from 'react';
import { Link, browserHistory } from 'react-router';
import AccountsUIWrapper from './../../Accounts/AccountsUIWrapper.js';

// AppNavBarr component - represents the Navigation Buttons of this App
export const AppHeader = () => (

  <div className='app-header'>
  
    <div className='nav-container'>
    
      <nav>

          <h1>Meteor-React start-app</h1>

          <Link to="/home"><button className='gc-btn gc-btn-medium gc-btn-primary'>Home</button></Link>

          <Link to="/tasks"><button className='gc-btn gc-btn-medium gc-btn-primary'>Tasks</button></Link>
          
          <Link to="/about"><button className='gc-btn gc-btn-medium gc-btn-primary'>About us</button></Link>
        
          <Link to="/admin"><button className='gc-btn gc-btn-medium gc-btn-primary'>Admin</button></Link>
          
          &nbsp;<AccountsUIWrapper />

      </nav>

    </div>

  </div>

);
