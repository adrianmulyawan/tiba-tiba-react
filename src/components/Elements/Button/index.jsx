import React from "react";

// > Ini adalah component button
// # Component ini punya 3 props (properti) => buttonType; buttonStyle; children;
// # props.children => memungkinkan kita menulis langsung didalam tagnya itu
// <Button buttonType="submit" buttonClass="btn-primary mx-2 text-white">Button 1</Button>
function index(props) {
  return (
    <>
      <button type={props.buttonType} className={`btn ${props.buttonStyle}`}>{props.children}</button>
    </>
  );
}

export default index;