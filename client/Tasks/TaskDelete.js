

import React from 'react';

import Button from './../_App/Button'


export default class TaskDelete extends React.Component {

  constructor(props) {
    super(props);
  }

  onClickDelete() {

    var p = this.props;

    p.deleteThisTask(p.task._id)
  }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (
          
        <Button 
          value='&times;'
          extraClass='gc-btn-danger'
          handleOnClick={this.onClickDelete}
        />

    );
  }
}
