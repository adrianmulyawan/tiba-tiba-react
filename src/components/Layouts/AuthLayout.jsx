import React from "react";
import { useLocation, Link } from "react-router";

const AuthLayout = (props) => {
  const { children, title } = props;
  const location = useLocation();
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="col-lg-5">
          <div className="login-header">
            <h1 className="text-primary">{ title }</h1>
            <p className="fw-lighter">Welcome, please enter your detail!</p>
          </div>
          { children }
          {/* conditional rendering */}
          <p className="text-center text-primary my-2">
            {
              location.pathname === '/register' ? (
                <>
                  Sudah punya akun? <Link to="/login" className="fw-bold">klik disini</Link>
                </>
              ) : (
                <>
                  Belum punya akun? <Link className="fw-bold" to="/register">daftar disini</Link>
                </>
              )
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;