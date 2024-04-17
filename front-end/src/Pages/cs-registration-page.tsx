import { FC } from "react";
import { RegistrationForm } from "../Components/CS-registration-form/cs-registration-form";
import { HomeLink } from "../Components/CS-home-link/CS-home-link";

const RegistrationPage: FC = () => {
  return (
    <div>
      <HomeLink/>
      <RegistrationForm/>
    </div>
  );
};

export default RegistrationPage;
