import React, { useEffect } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormRegister from "../components/Fragments/FormRegister";

const RegisterPage = () => {
  useEffect(() => {
    document.title = 'Register';
  });
  return (
    <AuthLayout title="Register">
      <FormRegister/>
    </AuthLayout>
  );
};

export default RegisterPage;