import { FC } from "react";
import { LogInForm } from "../Components/CS-login-form/cs-login-form";
import { HomeLink } from "../Components/CS-home-link/CS-home-link";

const LoginPage: FC = () => {
  return (
    <div>
      <HomeLink/>
      <LogInForm/>
    </div>
  );
};

export default LoginPage;
