

import React from 'react';

import { PageTitle } from './../_App/PageTitle.js'
import { HomePageBody } from './HomePageBody.js';

// This component represents the Home page of this app
export const HomePage = () => (

  <div className="container">

    <PageTitle
      pageTitle='Home'
    />

    <HomePageBody />

  </div>

);
