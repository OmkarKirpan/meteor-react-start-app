

import React from 'react';

import Button from './../_Utilities/Button/Button'


export default class TaskPrivate extends React.Component {

  constructor(props) {
    super(props);
  }

  onClickToggle = () => {

    var p = this.props;

    p.togglePrivate(p.task._id, p.task.isPrivate);
  }


/***************************************/
/* RENDER
/***************************************/

  render() {

    var p = this.props;

    return (

      <td className='textaligncenter'>
        <Button 
          value={ p.task.privatePublicBtnLbl }
          baseClass='gc-btn gc-btn-small gc-button-normal'
          extraClass={ p.task.privatePublicClassName }
          handleOnClick={this.onClickToggle.bind(this)}
        />
      </td>

    );

  }
}
