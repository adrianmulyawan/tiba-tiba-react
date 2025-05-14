import React from "react";
import Input from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <>
      <form method="POST">
        <Input label="name" text="Fullname" type="text" placeholder="Enter your name..." id="name" />
        <Input label="email" text="Email" type="email" placeholder="Enter your email..." id="email" />
        <Input label="password" text="Password" type="password" placeholder="Enter your password..." id="password" />
        <Input label="Address" text="Address" type="text" placeholder="Enter your address..." id="address" />
        <Input label="phone_number" text="Phone Number" type="text" placeholder="Enter your phone number..." id="phone_number" />
        <div className="d-grid gap-2">
          <Button buttonType="submit" buttonStyle="btn-primary rounded-4">Register</Button>
          <p className="text-center text-primary my-2">Sudah punya akun? <a href="/login" className="fw-bold">klik disini</a></p>
        </div>
      </form>
    </>
  );
};

export default FormRegister;