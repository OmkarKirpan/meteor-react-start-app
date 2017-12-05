

import React from 'react';


export const Button = (props) => (

  <button type="button" className={props.baseClass  + props.extraClass}
    onClick={props.handleOnClick.bind(this)}
  >

    {props.value}  

  </button>

);

Button.defaultProps = {
  value: '',
  baseClass: 'button ',
  extraClass: '',
};

export default Button;
