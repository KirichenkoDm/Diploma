import { FC } from "react";
import { StyledHomeAsideAutorize } from "./cs-home-aside-autorise-styled";
import { Link } from "react-router-dom";

export const HomeAsideAutorize: FC = () => {
  return (
    <StyledHomeAsideAutorize>
      <p>authorize to see your corses</p>
      <Link to = {"/singin"}><button>sign in</button></Link>
      <p>or create account</p>
      <Link to = {"/singup"}><button>sign up</button></Link>
    </StyledHomeAsideAutorize>
  );
};
