import React from "react";
import Button from "./components/Elements/Button";
import Input from "./components/Elements/Input";

function App() {
  return (
    <>
      <div className="container">
        <div class="d-flex flex-column justify-content-center align-items-center vh-100">
          <div className="col-lg-5">
            <div className="login-header">
              <h1 className="text-primary">Login</h1>
              <p className="fw-lighter">Welcome, please enter your detail!</p>
            </div>
            <form method="#">
              <Input label="email" text="Email" type="email" placeholder="Enter your email..." id="email" />
              <Input label="password" text="Password" type="password" placeholder="Enter your password..." id="password" />
              <div class="d-grid gap-2">
                <Button buttonType="submit" buttonStyle="btn-primary rounded-4">Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
