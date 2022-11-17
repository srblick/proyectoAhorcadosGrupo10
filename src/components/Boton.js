import React from 'react';
  
const Button = (props) => {
  return (
    <div className="btn" width="30px"
        onClick={() => props.manejarClick(props.children)}>{props.children}
    </div>
   );
}
  
export default Button;

