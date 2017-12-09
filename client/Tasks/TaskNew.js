

import React from 'react';


export default class TaskNew extends React.Component {

  constructor(props) {
        super(props);
    }


/***************************************/
/* RENDER
/***************************************/

    render() {

      var p = this.props;

      return (

        <div>

          <h3>Add new task</h3>

          <form className='gc-form tasknewform' onSubmit={p.handleSubmit} >
            
          <div> 
              <label className='gc-prelabel' htmlFor="newtask">
                New task: 
              </label>

              <input
                id='newtask'
                className='gc-inputtext'
                type="text"
                placeholder="Type to add new tasks"
                value={p.text}
                onChange={p.onTextChange}
              />
            </div>

          </form>

        </div>
      );

    }
  }
