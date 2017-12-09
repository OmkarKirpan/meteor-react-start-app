

import React from 'react';

import PropTypes from 'prop-types';


const Button = (props) => (

  <button type="button" className={props.baseClass  + props.extraClass }
    onClick={props.handleOnClick.bind(this)}
  >

    {props.value}  

  </button>

);

Button.propTypes = {
  value: PropTypes.string.isRequired,  
  baseClass: PropTypes.string,
  extraClass: PropTypes.string,
}

Button.defaultProps = {
  baseClass: 'gc-btn gc-btn-medium gc-button-normal',
  extraClass: '',
};

export default Button;
