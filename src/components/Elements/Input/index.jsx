import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, text, type, placeholder, id } = props;
  return(
    <div className="mb-3">
      <Label labelFor={ label }>
        { text }
      </Label>
      <Input inputType={ type } inputPlaceholder={ placeholder } inputId={ id } inputName={ label } />
    </div>
  );
};

export default InputForm;