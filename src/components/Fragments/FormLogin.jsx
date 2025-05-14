import React from "react";
import Input from '../Elements/Input';
import Button from '../Elements/Button';
import { Link } from "react-router";

const FormLogin = () => {
  return (
    <>
      <form method="POST">
        <Input label="email" text="Email" type="email" placeholder="Enter your email..." id="email" />
        <Input label="password" text="Password" type="password" placeholder="Enter your password..." id="password" />
        <div className="d-grid gap-2">
          <Button buttonType="submit" buttonStyle="btn-primary rounded-4">Login</Button>
          <p className="text-center text-primary my-2">Belum punya akun? <Link className="fw-bold" to="/register">daftar disini</Link></p>
        </div>
      </form>
    </>
  );
};

export default FormLogin;