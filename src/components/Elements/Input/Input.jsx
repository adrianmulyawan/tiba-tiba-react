import React from "react";

const Input = (props) => {
  const { inputType, inputPlaceholder, inputId, inputName } = props;
  return(
    <input type={ inputType } placeholder={ inputPlaceholder } 
        className="form-control border-1 rounded-4" 
        id={ inputId } name={ inputName } />
  );
};

export default Input;