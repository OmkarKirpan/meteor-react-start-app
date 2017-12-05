

import React from 'react';

import Button from './../_App/Button'


export default class TaskTextFormEdit extends React.Component {

  constructor(props) {
        super(props);
    }

  processSubmit(event) {
    event.preventDefault();
    this.props.endTextEditSave(this.props.editText)
  }

  onTextChange(event) {
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
            onSubmit={this.processSubmit.bind(this)}
            >

            <input
              autoFocus
              type="text"
              value={p.editText}
              onChange={this.onTextChange.bind(this)}
            />

            <Button 
              value='Cancel'
              handleOnClick={p.endTextEditClear.bind(this)}
            />
            <Button 
            value='Clear'
            handleOnClick={p.processTextClear.bind(this)}
            />
            <Button 
              value='Reset'
              handleOnClick={p.processTextReset.bind(this)}
            />
            <button type="button" onClick={this.processSubmit.bind(this)}>Submit</button>

          </form>

        </div>

      );
    }
  }
