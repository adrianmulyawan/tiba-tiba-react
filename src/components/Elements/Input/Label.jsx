import React from "react";

const Label = (props) => {
  const { labelFor, children } = props;
  return (
    <label htmlFor={ labelFor } className="form-label">
      { children }
    </label>
  );
};

export default Label;