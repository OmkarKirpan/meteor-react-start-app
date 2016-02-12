

import React from 'react';


// This component represents the Tasks page of this app
export const TaskOne = ( props ) => (

  <li key={ props.task._id }>
    { props.task.text }
  </li>

);
