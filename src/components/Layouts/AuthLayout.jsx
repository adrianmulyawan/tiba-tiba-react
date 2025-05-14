import React from "react";

const AuthLayout = (props) => {
  const { children, title } = props;
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="col-lg-5">
          <div className="login-header">
            <h1 className="text-primary">{ title }</h1>
            <p className="fw-lighter">Welcome, please enter your detail!</p>
          </div>
          { children }
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;