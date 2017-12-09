

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
              value={p.editText}
              onChange={this.onTextChange}
            />

            <Button 
              value='Cancel'
              handleOnClick={p.endTextEditClear}
            />
            <Button 
            value='Clear'
            handleOnClick={p.processTextClear}
            />
            <Button 
              value='Reset'
              handleOnClick={p.processTextReset}
            />
            <button type="button" onClick={this.processSubmit}>Submit</button>

          </form>

        </div>

      );
    }
  }
