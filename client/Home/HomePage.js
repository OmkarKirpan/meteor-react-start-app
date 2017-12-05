

import React from 'react';

import { PageTitle } from './../_App/PageTitle'
import { HomePageBody } from './HomePageBody';


export const HomePage = () => (

  <div className="container">

    <PageTitle
      pageTitle='Home'
    />

    <HomePageBody />

  </div>

);
