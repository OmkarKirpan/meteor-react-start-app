

import React from 'react';

import Button from './../_App/Button'


export default class TaskPrivate extends React.Component {

  constructor(props) {
    super(props);
  }

  onClickPrivate() {

    var p = this.props;

    p.togglePrivate(p.task._id, p.task.private);
  }


/***************************************/
/* RENDER
/***************************************/

  render() {

    var p = this.props;

    return (

      <Button 
        value={ p.task.privateBtnLbl }
        extraClass='button-private'
        handleOnClick={this.onClickPrivate.bind(this)}
      />

    );

  }
}
