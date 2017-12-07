

import React from 'react';


const Button = (props) => (

  <button type="button" className={props.baseClass  + props.extraClass }
    onClick={props.handleOnClick.bind(this)}
  >

    {props.value}  

  </button>

);

Button.defaultProps = {
  value: '',
  baseClass: 'gc-btn ',
  extraClass: '',
};

export default Button;
