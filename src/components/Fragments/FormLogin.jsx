import React from "react";
import Input from '../Elements/Input';
import Button from '../Elements/Button';
import { useNavigate } from "react-router";

const FormLogin = () => {
  const navigate = useNavigate();
  const myForm = (e) => {
    e.preventDefault();
    // ambil nilai di form
    const email = e.target.email.value;
    const password = e.target.password.value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    navigate('/products');
  };

  return (
    <>
      <form method="POST" onSubmit={ myForm }>
        <Input label="email" text="Email" type="email" placeholder="Enter your email..." id="email" />
        <Input label="password" text="Password" type="password" placeholder="Enter your password..." id="password" />
        <div className="d-grid gap-2">
          <Button buttonType="submit" buttonStyle="btn-primary rounded-4">Login</Button>
        </div>
      </form>
    </>
  );
};

export default FormLogin;