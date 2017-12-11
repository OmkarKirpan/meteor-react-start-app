

import React from 'react';

import Button from './../_Utilities/Button/Button'


export default class TaskDelete extends React.Component {

  constructor(props) {
    super(props);
  }

  onClickDelete = () => {

    var p = this.props;

    p.deleteThisTask(p.task._id)
  }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (
        
        <td className='textaligncenter'>
          <Button 
            value='&times;'
            extraClass=' gc-btn-small gc-btn-danger '
            handleOnClick={this.onClickDelete}
          />
        </td>

    );
  }
}
