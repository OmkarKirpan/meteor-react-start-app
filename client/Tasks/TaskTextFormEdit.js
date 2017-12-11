

import React from 'react';

import Button from './../_Utilities/Button/Button'


export default class TaskTextFormEdit extends React.Component {

  constructor(props) {
        super(props);
    }

  processSubmit = (event) => {
    event.preventDefault();
    this.props.endTextEditSave(this.props.editText)
  }

  onTextChange = (event) => {
    this.props.processTextTyping(event.target.value)
  }
  

/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props

      return (

        <div>

          <form className={ p.frmClassName }
            onSubmit={this.processSubmit}
            >

            <input
              autoFocus
              type="text"
              className='gc-inputtext'
              value={p.editText}
              onChange={this.onTextChange}
            />
            <br />
            <Button 
              value='Cancel'
              extraClass=' gc-btn-small taskeditbtngroup taskeditcancel '
              handleOnClick={p.endTextEditClear}
            />
            <Button 
            value='Clear'
            extraClass=' gc-btn-small taskeditbtngroup taskeditclear '
            handleOnClick={p.processTextClear}
            />
            <Button 
              value='Reset'
              extraClass=' gc-btn-small taskeditbtngroup taskeditreset'
              handleOnClick={p.processTextReset}
            />
            <button
            type="button"
            className='taskeditbtngroup taskeditsubmit'
            onClick={this.processSubmit}>Submit</button>

          </form>

        </div>

      );
    }
  }
