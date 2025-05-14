import React, { useEffect } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Login';
  });
  return (
    <AuthLayout title="Login">
      <FormLogin/>
    </AuthLayout>
  );
};

export default LoginPage;