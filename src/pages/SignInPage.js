import React from "react";
// import SignUpLink from "../components/usermanagement/SignUpLink";
import SignInForm from "../components/usermanagement/SignIn";
// import PasswordForgetLink from "../components/usermanagement/PasswordForgetLink";

const SignInPage = () => {
  return (
    <div>
      <SignInForm />
      <div>{/* <SignUpLink /> <PasswordForgetLink /> */}</div>
    </div>
  );
};

export default SignInPage;
