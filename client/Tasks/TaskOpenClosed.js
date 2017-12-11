

import React from 'react';

import Button from './../_Utilities/Button/Button'


export default class TaskOpenClosed extends React.Component {

  constructor(props) {
    super(props);
  }

  onClickToggle = () => {

    var p = this.props;

    p.toggleChecked(p.task._id, p.task.isOpen)
  }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

        <td className='textaligncenter'>
          <Button 
            value={ p.task.openClosedBtnLbl }
            baseClass='gc-btn gc-btn-small gc-button-normal'
            extraClass={ p.task.openClosedClassName }
            handleOnClick={this.onClickToggle}
          />
        </td>

    );
  }
}
